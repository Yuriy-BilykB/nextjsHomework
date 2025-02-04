import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: Promise<SearchParams>
}

const UserPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null
    if (typeof data === 'string'){
        obj = JSON.parse(data)
    }
    return (
        <div>
            {obj.title}
        </div>
    );
};

export default UserPage;