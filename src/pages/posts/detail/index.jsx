import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";

import * as SC from './styles';
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
    const { id } = useParams();
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    const { post, loading } = postForView

    useEffect(() => {
        dispatch(getPostById(Number(id)))
    }, [id])

    if (loading) {
        return <Container>
            Loading...
        </Container>
    }

    if (!post) {
        return <>Пост не найден</>
    }

    return(
        <Container>
            <Typo>{post.title}</Typo>
            {post.image && <SC.Image src={post.image} alt={post.title} />}            
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both'}} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>                
            </SC.LinkWrapper>            
        </Container>
    )
}