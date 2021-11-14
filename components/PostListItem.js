import React from 'react'
import Link from 'next/link'
import { useAppContext } from '../data/context';

const PostListItem = ({ title, body, userId, id }) => {

    const [comments, setComments] = React.useState(0);
    const [user, setUser] = React.useState('');
    const { state, dispatch } = useAppContext();

    React.useEffect(() => {
        let userObject = state.users.find(user => user.id === userId)
        setUser(userObject.name)

        let commentCount = state.comments.filter(cm => cm.postId === id).length
        setComments(commentCount)

    }, [id, state.comments, state.users, userId])

    return (
        <div className="p-8 border border-gray-300 rounded-sm grid gap-2 hover:shadow-md transition-all">
            <Link href={`/post/${id}`}>
                <a>
                    <h1 className="text-2xl text-gray-800 font-medium">{title}</h1>
                </a>
            </Link>
            <p className="text-sm text-gray-600 p-2">{body}</p>
            <div className="flex w-5/6  justify-between text-gray-700">
                <h6 className="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {user}
                </h6>
                <h6 className="text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {comments}
                </h6>

            </div>
        </div>
    )
}

export default PostListItem;