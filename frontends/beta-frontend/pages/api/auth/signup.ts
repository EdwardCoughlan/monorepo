import { connectorAuth } from '@/libs/fetcher'
import { signIn } from 'next-auth/react'

export async function apiSignIn(username: string, password: string): Promise<number> {
  return new Promise((resolve, reject) => {
    signIn('credentials', {
      redirect: false,
      username: username,
      password: password,
    })
      .then((res) => {
        if (res?.status === 200) {
          resolve(res.status)
        }
        reject('Invalid credentials')
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })
}

export async function apiSignup(username: string, password: string, teamName: string) {
  await connectorAuth('/auth/sign-up', 'POST', {
    username,
    password,
    teamName,
  })
  return apiSignIn(username, password)
}
