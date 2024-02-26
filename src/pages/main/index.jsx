import React, { useEffect } from "react";
import { Posts } from '../../components/Posts';
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useSelector, useDispatch } from 'react-redux'
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";


export const MainPage = () => {
    const postForView = useSelector((state) => state.posts.postForView)
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(getFreshPosts())}, [dispatch])

    return(        
        <>
        <Container>
            {loading && <Loader />}           
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