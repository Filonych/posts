import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";


export const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
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
        id: 3,
        title: 'Post 3',
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
        id: 5,
        title: 'Post 5',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ornare est in lobortis. Donec varius, dui et consequat bibendum, odio erat hendrerit sem, eu placerat tellus purus a nunc. Vestibulum interdum elit eget erat accumsan dictum. Integer et aliquet lacus. Ut et consectetur felis. Nunc feugiat luctus nisl. Sed venenatis lobortis justo nec eleifend. Nulla diam tellus, blandit vitae ullamcorper non, ornare eu erat. Donec in dui in libero.'
    },
  ]

export const PostsPage = () => (
    <>
        <Typo>Публикации</Typo>
        <Container>
        <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
    )