import fetchCars from "@/utils/utils";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";
import CarCard from "./CarCard";
import { fuels, yearsOfProduction } from "@/constants/data";

// const CarCatalogue = async ({searchParams} : any) => {
const CarCatalogue = async () => {
    // const allCars = await fetchCars({
    //     manufacturer: searchParams.manufacturer || '',
    //     year: searchParams.year || 2022,
    //     fuel: searchParams.fuel || '',
    //     limit: searchParams.limit || 10,
    //     model: searchParams.model || ''
    // });
    const allCars = await fetchCars();
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    
    return (
        <>
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
                <SearchBar/>
                <div className="home__filter-container">
                    <CustomFilter title="fuel" options={fuels}/>
                    <CustomFilter title="year" options={yearsOfProduction}/>
                </div>
            </div>

            {
                !isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {
                                allCars.map(car => (
                                    <CarCard car={car}/>
                                ))
                            }
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )
            }
        </>
    )
}

export default CarCatalogue;

