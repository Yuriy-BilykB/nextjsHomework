import {ICar} from "@/models/ICar";
export const getAllCars = async (): Promise<ICar[]> => {
    const cars: ICar[] = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json());
    console.log(cars)
    return cars;
}
