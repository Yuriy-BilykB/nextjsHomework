"use client";
import {useState, useEffect} from "react";
import {deleteCar} from "@/server-actions/server-actions";
const Car = ({searchParams}: { searchParams: Record<string, string> }) => {
    const [car, setCar] = useState<{ id: string; brand: string; year: string; price: string } | null>(null);

    useEffect(() => {
        if (searchParams.data) {
            try {
                const obj = JSON.parse(searchParams.data);
                setCar(obj);
            } catch (error) {
                console.error("Invalid JSON in searchParams:", error);
            }
        }
    }, [searchParams]);

    const handleDelete = async () => {
        if (car) {
            await deleteCar(car.id);
            setCar(null);
        }
    };
    return (
        <div>
            {car ? (
                <>
                    <p>{car.brand} {car.year} {car.price}</p>
                    <button onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <p>No car found.</p>
            )}
        </div>
    );
};

export default Car;
