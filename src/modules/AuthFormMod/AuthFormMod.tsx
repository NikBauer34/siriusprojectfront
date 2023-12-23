import React, { FC, useContext } from "react";
import {useForm} from '@mantine/form'
import { IAuthFormMod } from "./IAuthFormMod";
import { TextInput, Button } from "@mantine/core";
import { Navigate, redirect, useLocation } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import { Context } from "../../main";
import { notifications } from "@mantine/notifications";
const AuthFormMod: FC = () => {
  const location = useLocation()
  const {user} = useContext(Context)
  const authform = useForm({
    validateInputOnChange: true,
    initialValues: {email: '', password: ''},

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Невалидная почта'),
      password: (value) => (value.length < 5 ? 'Пароль должен состоять хотя-бы из 5 символов': null),
    }
  })
  const FormSubmit = async (values: IAuthFormMod) => {
    const {email, password} = values;
    console.log(values)
    if (location.pathname == '/login') {
      const response = await user.login(email, password);
      console.log(response)
      notifications.show({
        title: 'Hello!',
        message: String(response)
      })
      location.pathname = '/pages/main'
    } else if (location.pathname == '/registration') {
      const response = await user.registration(email, password)
      console.log(response)
      notifications.show({
        title: 'Hello!',
        message: String(response)
      })
      redirect('/pages/main')

    }
  }
  return (
    <form onSubmit={authform.onSubmit((values) => FormSubmit(values))}>
      <TextInput label='Электронная почта' placeholder="Вводите здесь..." {...authform.getInputProps('email')}/>
      <TextInput label='Пароль' placeholder='Вводите здесь...' {...authform.getInputProps('password')}/>
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  )
}
export default observer(AuthFormMod);