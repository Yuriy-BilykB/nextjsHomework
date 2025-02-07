"use server";
import { ICar } from "@/models/ICar";
export const getAllCars = async (): Promise<ICar[]> => {
    try {
        const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars');
        if (!response.ok) {
            throw new Error("Failed to fetch cars");
        }
        const cars: ICar[] = await response.json();
        console.log(cars);
        return cars;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
};
export const addCar = async (formData: FormData) => {
    const brand = formData.get("brand")?.toString();
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));
    if (!brand || isNaN(price) || isNaN(year)) {
        throw new Error("All fields are required and must be valid");
    }
    try {
        const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ brand, price, year }),
        });
        if (!response.ok) {
            throw new Error("Failed to add car");
        }
        console.log("Car added successfully");
    } catch (error) {
        console.error("Error adding car:", error);
    }
};

export const deleteCar = async (id: string) => {
    try {
        const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to delete car with id ${id}`);
        }
        console.log(`Car with id ${id} deleted successfully`);
    } catch (error) {
        console.error("Error deleting car:", error);
    }
};

