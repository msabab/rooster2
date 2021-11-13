import { useRouter } from 'next/router'
import React from 'react'
const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        async function fetchData() {
            const data = await (fetch('https://jsonplaceholder.typicode.com/posts'))
            const posts = await data.json()
            let postObject = posts.find(post => post.id == id)
            setData(postObject)
        }
        fetchData();
    }, [])
    if(!data){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <h6>{data.userId}</h6>
            <p>Post: {id}</p>
        </div>
    )
}

export default Post