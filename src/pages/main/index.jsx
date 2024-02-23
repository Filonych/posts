import React, { useEffect } from "react";
import { Posts } from '../../components/Posts';
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";
import { useSelector, useDispatch } from 'react-redux'
import { getFreshPosts } from "../../redux/slices/postsSlice";


export const MainPage = () => {
    const postForView = useSelector((state) => state.posts.postForView)
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(getFreshPosts())}, [])

    return(        
        <>
        <Container>
            {loading && <>Loading...</>}
            {posts && <>
                <Typo>Свежие публикации</Typo>        
                <Posts posts={posts} />
            </>}
            
            {postForView.post &&
            <>
                <Typo>Последний просмотренный пост</Typo>
                <Posts posts={[postForView.post]} />
            </>
            }
        </Container>
        
    </>
    )
}