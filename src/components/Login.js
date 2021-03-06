import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

const loginURL = 'http://localhost:3333/login'

export default function Login(props) {
  const onLogin = ({ username, password }) => {
    axios.post(
      loginURL,
      { username, password }
    )
      .then(res => {
        // please handle the token somehow
        // and redirect me to home page
      })
      .catch(error => {
        debugger
      })
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onLogin}
    >
      {
        props => (
          <Form className='login'>
            <Field name='username' type="text" placeholder='username' />
            <Field name='password' type="text" placeholder='password' />
            <input type='submit' />
          </Form>
        )
      }
    </Formik>
  )
}
