'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchManufacturer from './SearchManufacturer';
import SearchButton from './SearchButton';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(manufacturer === '' && model === ''){
            return alert('Please fill in the search bar');
        }

        updateSearchParams(
            model.toLowerCase(),
            manufacturer.toLowerCase()
        );
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        
        model ? searchParams.set('model', model) : searchParams.delete('model');
        manufacturer ? searchParams.set('manufacturer', manufacturer) : searchParams.delete('manufacturer');

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname);
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image
                    src='/model-icon.png'
                    alt='car model'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input 
                    type="text" 
                    name='model'
                    value={model}
                    onChange={event => setModel(event.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar;