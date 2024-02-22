import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
        id: 5,
        title: 'Post 5',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
    {
        id: 1,
        title: 'Post 1',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
  ],
  postForView: null,
  freshPosts: null,
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
      state.postForView = state.list.find((item) => item.id === action.payload)
        
    }, 
    addPosts: (state, action) => {
        
    },  
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3)
    }
  },
})

export const { setPosts, editPost, getPost, addPosts, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer