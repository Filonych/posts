import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.posts = action.payload
    },
    editPost: (state, action) => {
        
    }, 
    getPost: (state, action) => {
        
    }, 
    addPosts: (state, action) => {
        
    },  
  },
})

export const { setPosts, editPost, getPost, addPosts } = counterSlice.actions

export default postsSlice.reducer