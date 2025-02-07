import {getAllCars} from "@/server-actions/server-actions";
import Link from "next/link";
const Cars = async () => {
    const cars = await getAllCars()
    console.log(cars)
    return (
        <div>
            {cars.map((car) => <div key={car.id}>
                <Link href={{ pathname: '/cars/' + car.id?.toString(), query: {data: JSON.stringify(car)}}}>{car.brand}</Link>
            </div>)}
        </div>
    );
};
export default Cars;
