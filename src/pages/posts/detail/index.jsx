import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";

import * as SC from './styles';
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, ShowPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
    const { id } = useParams();
    const postForView = useSelector((state) => state.posts.postForView)
    const list = useSelector((state) => state.posts.posts.list)
    const dispatch = useDispatch() 

    useEffect(() => {
        const intId = Number(id)    
        const findedPost = list ? list.find((item) => item.id === intId) : undefined

        if (findedPost) {
            dispatch(ShowPost(findedPost))
        } else {
            dispatch(getPostById(Number(id)))
        }        
    }, [dispatch, list, id])

    const { post, loading } = postForView    

    if (loading) {
        return <Container>
            Loading...
        </Container>
    }

    if (!post || !post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const image = post.image || 'https://img.freepik.com/premium-photo/fantasy-rainbow-landscape-beautiful-minimalist-rainbow-in-sky-illustration-generative-ai_691560-8602.jpg'

    return(
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />            
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both'}} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>                
            </SC.LinkWrapper>            
        </Container>
    )
}