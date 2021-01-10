import React, { useState, useCallback } from 'react'
import { AppProvider, FormLayout, TextField, Button, Form, Layout, Card } from '@shopify/polaris'
import axios from 'axios'

function Signup () {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((_event) => {
    const signUserUp = async () => {
      const postData = await axios.post('http://localhost:5000/users/signup')
      const result = postData.data
      console.log(result)
    }
    signUserUp()
  })

  const handlePasswordChange = useCallback((value) => setPassword(value, []))

  const handleEmailChange = useCallback((value) => setEmail(value), [])
  return (
    <div>
      <AppProvider>
        <Layout>
          <Layout.Section>
            <Card title='Sign up for Shoppies and vote your favourite movie for the Shoppies award' sectioned>
              <Form
                onSubmit={handleSubmit}
              >
                <FormLayout>

                  <TextField
                    value={email}
                    onChange={handleEmailChange}
                    label='Email'
                    name='username'
                    type='email'
                  />

                  <TextField
                    value={password}
                    onChange={handlePasswordChange}
                    label='Password'
                    name='password'
                    type='Password'
                  />

                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>
            </Card>
          </Layout.Section>
        </Layout>
      </AppProvider>
    </div>
  )
}

export default Signup
