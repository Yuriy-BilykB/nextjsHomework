"use client"
import {useState} from "react";
import {ICar} from "@/models/ICar";
import {addCar} from "@/api-services/api-services";

export const Form = () => {
    const [dataCar, setDataCar] = useState<ICar>({
        brand: '',
        price: '',
        year: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataCar({ ...dataCar, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        addCar({
            brand: dataCar.brand,
            price: Number(dataCar.price),
            year: Number(dataCar.year)
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input onChange={handleChange} value={dataCar.brand} name='brand' type="text"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input onChange={handleChange} value={dataCar.price} name='price' type="number"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input onChange={handleChange} value={dataCar.year} name='year' type="number"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;