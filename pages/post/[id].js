import { useRouter } from 'next/router'
import React from 'react'
import { useAppContext } from '../../data/context'
const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const { state, dispatch } = useAppContext()
    const [data, setData] = React.useState(null)
    const [userName, setUserName] = React.useState(null)

    React.useEffect(() => {
        setData({ ...state.posts.find(post => post.id == id), commentCount: state.comments.filter(comment => comment.postId == id).length })
    }, [id, state.posts, state.comments])

    React.useEffect(() => {
        if (data && data.userId) {
            setUserName(state.users.find(user => user.id == data.userId).name)
        }
    }, [data, state.users])

    if (!data || !data.title) {
        return <div>Loading...</div>
    }
    return (
        <div className="grid place-items-center p-32 bg-gray-300 min-h-screen">
            <div className="max-w-xl grid bg-gray-200 p-8 rounded-lg gap-12">
                <h1 className="text-gray-800 font-semibold text-3xl">{data.title}</h1>
                <div className="flex w-3/4  justify-between text-gray-700">
                    <h6 className="text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {userName}
                    </h6>
                    <h6 className="text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {data.commentCount}
                    </h6>

                </div>
                <p className="font-base text-gray-700 ">{data.body}</p>
            </div>
        </div>
    )
}

export default Post