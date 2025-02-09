"use server"
import {carValidator} from "@/validators/carValidator";

export const addCar = async (formData: FormData) => {
    const brand = formData.get('brand');
    const price = formData.get('price');
    const year = formData.get('year');
    const { error } = carValidator.validate({ brand, price, year });

    if (error) {
        console.log('Validation failed:', error.details);
        return;
    }
    await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            brand,
            price,
            year
        })
    })
}