export const postsAPI = {
    fetchPosts() {
        try {          
          return fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then((response) => response.json())
            .then((posts) => posts);
        } catch (ex) {
          console.log(ex);
        }
      },

  fetchbyId(id) {
    try {
      if (!id) {
        throw new Error("ID is broken");
      }
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post);
    } catch (ex) {
      console.log(ex);
    }
  },
};
