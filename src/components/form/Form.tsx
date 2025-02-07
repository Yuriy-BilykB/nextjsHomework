"use client"
import {addCar} from "@/server-actions/server-actions";
export const Form = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        await addCar(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input name='brand' type="text"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input name='price' type="number"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input name='year' type="number"/>
                </div>
                <button  type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;