import React, { useState } from "react";
import { Container } from '../../components/ui/Container'
import { Typo } from '../../components/ui/Typo'
import { Form } from '../../components/ui/Form'
import { Field } from '../../components/ui/Field'
import { Input } from '../../components/ui/Input'

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: ''})

    const disabled = !formValues.email || !formValues.password

    const onSubmit = (e) => {
        e.preventDefault() 
        try {
            const users = JSON.parse(localStorage.getItem('users'))
            if (!users) {
                console.log('Добавляем нового')
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert ('Пользователь с таким email уже существует')
                return
            }

        } catch {

        }
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input 
                    type="text"
                    name="name" 
                    value={formValues.name}
                    placeholder="Имя" 
                    onChange={(e) => onChange(e.target.name, e.target.value)}/>
                </Field>
                <Field>
                    <Input 
                    type="text"
                    name="surname" 
                    value={formValues.surname}
                    placeholder="Фамилия" 
                    onChange={(e) => onChange(e.target.name, e.target.value)}/>
                </Field>
                <Field>
                    <Input 
                    type="email"
                    name="email" 
                    value={formValues.email}
                    placeholder="E-mail"
                    onChange={(e) => onChange(e.target.name, e.target.value)}/>
                </Field>
                <Field>
                    <Input 
                    type="password"
                    name="password" 
                    value={formValues.password}
                    placeholder="Пароль" 
                    onChange={(e) => onChange(e.target.name, e.target.value)}/>
                </Field>
                <button type="submit" disabled={disabled}>Регистрация</button>
            </Form>
        </Container>
    )
}

