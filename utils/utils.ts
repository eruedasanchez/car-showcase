import { config } from "@/config/config";
import { CarProps, FilterProps } from "@/types/types";

export default async function fetchCars() {
// export default async function fetchCars(filters : FilterProps) {
    // const { manufacturer, year, fuel, limit, model } = filters;
    const headers = {
        'X-RapidAPI-Key': config.X__RAPIDAPI__KEY,
        'X-RapidAPI-Host': config.X__RAPIDAPI__HOST
	};
    
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const response = await fetch(url, {headers: headers});
    const result = await response.json();
    
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    
    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL(config.CAR__IMAGIN__STUDIO_URL);
    const {make, year, model} = car;

    url.searchParams.append('customers', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
}

