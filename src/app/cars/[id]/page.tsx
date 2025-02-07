import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";

type Props = {
    searchParams: Promise<SearchParams>
}

const carPage:FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string'){
        obj = JSON.parse(data)
    }

    return (
        <div>
            {obj.brand} {obj.year} {obj.price}
        </div>
    );
};

export default carPage;