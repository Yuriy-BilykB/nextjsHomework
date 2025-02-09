"use client"
import {ICar} from "@/models/ICar";
import {useState} from "react";
import {deleteCar} from "@/api-services";
type CarDeleteProps = {
    cars: ICar[];
};
const CarDelete = ({cars}: CarDeleteProps) => {
    const [deletedCars, setDeletedCars] = useState<number[]>([])
    const handleCheck = (id: number) => {
        setDeletedCars((prevState) => {
            if (prevState.includes(id)) {
                return prevState.filter((carId) => carId !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleDelete = async () => {
        try {
            for (const id of deletedCars) {
                await deleteCar(id);  // Функція для видалення через API
            }
            alert("Cars deleted successfully!");

        } catch (error) {
            console.error("Error deleting cars:", error);
        }
    };
    
    console.log(deletedCars)
    return (
        <div>
            <button onClick={handleDelete}>Delete Car</button>
            {cars.map((car) => <div key={car.id}>
                {car.brand}
                <input type="checkbox" onChange={() => handleCheck(car.id)}/>
            </div>)}
        </div>
    );
};

export default CarDelete;