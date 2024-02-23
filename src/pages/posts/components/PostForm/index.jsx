import React, { useState } from "react";
import { Container } from "../../../../components/Container";
import { Typo } from "../../../../components/Typo";
import * as SC from './styles'
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../redux/slices/postsSlice";

const DEFAULT_VALUES = {title: '', body: ''}

export const PostForm = () => {
    const [formValues, setFormValues] = useState(DEFAULT_VALUES)
    const disabled = !formValues.title || !formValues.body
    const posts = useSelector((state) => state.posts.posts.list)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(formValues))
        setFormValues(DEFAULT_VALUES)
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    console.log(posts)

    return(
        <Container>
            <Typo>Добавление нового поста</Typo>
            <SC.Form onSubmit={onSubmit}>
            <SC.Field>
                <SC.Input 
                type="text"
                name="title" 
                value={formValues.title}
                placeholder="Заголовок" 
                onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </SC.Field>
            <SC.Field>
                <SC.Textarea 
                type="text"
                name="body" 
                value={formValues.body}
                placeholder="Текст" 
                rows={10} cols={30} 
                onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </SC.Field>
            <SC.Button type="submit" disabled={disabled}>Сохранить</SC.Button>
        </SC.Form>
        </Container>
        
    )
}