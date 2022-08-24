import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../style/global.module.css'

export default function Account() {
  const {data, status} = useSession()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <div className='container'>
      {!data ? 
        <></>
        :
        <div className={style.container}>
          <h1>Hello, {data.user.name}</h1>
          <p>{data.user.email}</p>
          <Image src={data.user.image} alt='user image' width={350} height={350}/>
        </div>
      }
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}