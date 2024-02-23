import React from "react";
import { Container } from "../../../../components/Container";
import { Typo } from "../../../../components/Typo";
import * as SC from './styles'

export const PostForm = () => {
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <Container>
            <Typo>Добавление нового поста</Typo>
            <SC.Form onSubmit={onSubmit}>
            <SC.Field>
                <SC.Input type="text"name="title" placeholder="Заголовок" />
            </SC.Field>
            <SC.Field>
                <SC.Textarea type="text"name="body" placeholder="Текст" rows={10} cols={30} />
            </SC.Field>
            <SC.Button type="submit">Сохранить</SC.Button>
        </SC.Form>
        </Container>
        
    )
}