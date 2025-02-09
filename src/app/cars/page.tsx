import CarDelete from "@/components/Cars/Car";
import {getCars} from "@/api-services";
const CarsPage = async () => {
    const cars = await getCars()
    return (
        <div>
            <CarDelete cars={cars}/>
        </div>
    );
};

export default CarsPage;