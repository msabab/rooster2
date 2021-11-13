import React from 'react'
import Link from 'next/link'

const PostListItem = ({ title, body, userId, id }) => {

    const [comments, setComments] = React.useState(0);
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        async function fetchData() {
            const data = await (fetch('https://jsonplaceholder.typicode.com/users'))
            const users = await data.json()
            let userObject = users.find(user => user.id === userId)
            setUser(userObject.name)
        }
        async function fetchComments() {
            const data = await (fetch('https://jsonplaceholder.typicode.com/comments'))
            const comments = await data.json()
            let commentCount = comments.filter(cm => cm.postId === id).length
            setComments(commentCount)
        }
        fetchData();
        fetchComments();

    }, [])

    return (
        <div className="p-8 border rounded-sm m-4 grid gap-2">
            <Link to={`/post/${id}`} href={`/post/${id}`}>
                <a>
                    <h1 className="text-2xl">{title}</h1>
                </a>
            </Link>
            <p className="text-sm">{body}</p>
            <h6 className="text-base">{user}</h6>
            <h6>{comments}</h6>
        </div>
    )
}

export default PostListItem;