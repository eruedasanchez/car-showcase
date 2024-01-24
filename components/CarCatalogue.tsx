import fetchCars from "@/utils/utils";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";
import CarCard from "./CarCard";

const CarCatalogue = async () => {
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
                    <CustomFilter title="fuel"/>
                    <CustomFilter title="year"/>
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

