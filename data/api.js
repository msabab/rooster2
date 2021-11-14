export async function fetchUsers() {
    const data = await (fetch('https://jsonplaceholder.typicode.com/users'))
    const users = await data.json()
    return users
}

export async function fetchComments() {
    const data = await (fetch('https://jsonplaceholder.typicode.com/comments'))
    const comments = await data.json()
    return comments
}

export async function fetchPosts() {
    const data = await (fetch('https://jsonplaceholder.typicode.com/posts'))
    const posts = await data.json()
    return posts
}