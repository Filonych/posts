export const Filter = () => {
    const filterPosts = () => {
        
    }

    return (
        <input type="text" onChange={(e) => filterPosts(e.target.value)}/>
    )
}