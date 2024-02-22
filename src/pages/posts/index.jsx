import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";
import { useSelector } from "react-redux";

export const PostsPage = () => {
    const posts = useSelector((state) => state.posts.list)

    return(
        <>
            <Typo>Публикации</Typo>
            <Container>
            <Posts posts={posts} />
            </Container>
        </>
    )
}