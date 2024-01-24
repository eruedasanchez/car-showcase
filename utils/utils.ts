export default async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'da7b96e4a4msh02f26b69ad45698p110214jsn8c3351cde794',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
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
