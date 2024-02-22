export const postsAPI = {
    fetchbyId (id) {
        if (!id) {
            throw new Error('ID is broken')
        }
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post);
    }
}