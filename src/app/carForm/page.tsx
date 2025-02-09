"use client"
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {ICar} from "@/models/ICar";
import {addCar, getCars} from "@/api-services";
const FormPage = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset}
        = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});
    const customHandler = async (formDataProps: ICar) => {
        await addCar(formDataProps);
        reset();
        const cars = await getCars();
        console.log('Оновлений список машин:', cars);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label htmlFor="">
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type={'number'} {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>Add Car</button>
            </form>
        </div>
    );
};

export default FormPage;