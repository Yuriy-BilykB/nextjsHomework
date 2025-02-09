import {ICar} from "@/models/ICar";

export const getCars = async (): Promise<ICar[]> => {
    const data = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
    return  data.json();
}

export const deleteCar = async (id: number): Promise<void> => {
    const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars/' + id, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to delete car with id ${id}`);
    }
    return;
};
