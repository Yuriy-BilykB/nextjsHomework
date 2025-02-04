import {getUsers} from "@/app/apiServices/apiService";
import Link from "next/link";
const UsersComponent = async () => {
    const users = await getUsers()
    return (
        <div>
            {
                users.map((user) => <div key={user.id}><Link href={{pathname: '/users/' + user.id.toString(), query:{data: JSON.stringify(user)} }}>{user.id} {user.firstName}</Link></div> )
            }
        </div>
    )
};

export default UsersComponent;