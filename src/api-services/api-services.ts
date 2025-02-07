type carTypeProps = {
    brand: string,
    price: number,
    year: number
}

export const addCar = async ({brand, price, year}: carTypeProps) => {
    await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ brand, price, year })

    })
}
