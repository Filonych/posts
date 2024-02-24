import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";

import * as SC from './styles';
import { Link } from "../../../components/ui/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const postForView = useSelector((state) => state.posts.postForView)
    const list = useSelector((state) => state.posts.posts.list)

    const [postForDelete, setPostForDelete] = useState(null)

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))
        setPostForDelete(null)
        navigate('/posts')
    }

    useEffect(() => {
        const intId = Number(id)    
        const findedPost = list ? list.find((item) => item.id === intId) : undefined

        if (findedPost) {
            dispatch(showPost(findedPost))
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
            {postForDelete && 
            <SC.ModalWrapper>
                <SC.Modal>
                    <SC.ModalText>{`Вы точно хотите удалить пост с ID - ${post.id}?`}</SC.ModalText>
                    <SC.ModalContent>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                        <button onClick={() => setPostForDelete(null)}>Нет</button>
                    </SC.ModalContent>
                </SC.Modal>
            </SC.ModalWrapper>}            
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />            
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both'}} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>  
                {list && <Link to={`/posts/${id}/edit`}>Редактировать</Link>}
                {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}                             
            </SC.LinkWrapper>            
        </Container>
    )
}