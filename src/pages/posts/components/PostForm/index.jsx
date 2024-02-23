import React from "react";
import { Container } from "../../../../components/Container";

export const PostForm = () => {
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <Container>
            <form onSubmit={onSubmit}>
            <div>
                <input type="text"name="title" placeholder="Заголовок" />
            </div>
            <div>
                <textarea type="text"name="body" placeholder="Текст" />
            </div>
            <button type="submit">Сохранить</button>
        </form>
        </Container>
        
    )
}