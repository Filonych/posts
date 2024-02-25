import React from "react";
import { PostForm } from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPost } from "../../../redux/slices/postsSlice";

export const EditPostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { list } = useSelector((state) => state.posts.posts)

    const intId = Number(id)

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
        console.log(formValues)
    }

    if (!list) {
        return <>Пост не найден</>
    }
    
    const findedPost = list.find((item) => item.id === intId)

    return (
        <PostForm title={`Редактировать пост - ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost}/>
    )
}