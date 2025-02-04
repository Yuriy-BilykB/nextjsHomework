import {getPosts} from "@/app/apiServices/apiService";
import Link from "next/link";
const UsersComponent = async () => {
    const posts = await getPosts()
    return (
        <div>
            {
                posts.map((post) => <div key={post.id}><Link href={{pathname: '/posts/' + post.id.toString(), query:{data: JSON.stringify(post)} }}>{post.id} {post.title}</Link></div> )
            }
        </div>
    )
};

export default UsersComponent;