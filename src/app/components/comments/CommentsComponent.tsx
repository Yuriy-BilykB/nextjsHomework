import {getComments} from "@/app/apiServices/apiService";
import Link from "next/link";
const UsersComponent = async () => {
    const comments = await getComments()
    return (
        <div>
            {
                comments.map((comment) => <div key={comment.id}><Link href={{pathname: '/comments/' + comment.id.toString(), query:{data: JSON.stringify(comment)} }}>{comment.id} {comment.body}</Link></div> )
            }
        </div>
    )
};

export default UsersComponent;