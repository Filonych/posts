import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";


const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg',
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