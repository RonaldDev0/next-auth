import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import style from '../style/global.module.css'

export default function Protected() {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <div className='container'>
      <h1 className={style.h1}>Hello world protected</h1>
    </div>
  )
}