import { signIn, useSession, getProviders } from "next-auth/react"
import { useRouter } from "next/router"
import Head from "next/head"
import style from '../style/global.module.css'

export default function Login() {
  const {data: session, status} = useSession()
  const router = useRouter()
  const providers = getProviders()

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  return(
    <div className='container'>
      <Head>
        <title>Login</title>
      </Head>
      <button className={style.button} onClick={()=> signIn('github')}>Signin with Github</button>
    </div>
  )
}