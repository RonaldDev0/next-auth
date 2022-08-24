import Link from "next/link"
import { useSession } from "next-auth/react"
import style from '../style/global.module.css'

export default function NavBarr() {
  const { status } = useSession()

  return (
    <div className='container'>
      <nav className={style.navBarr}>
        <Link href='/' ><a>Home</a></Link>
        {
          status === 'authenticated' ? 
          <Link href='/account' ><a>Account</a></Link>
          :
          <Link href='/login' ><a>Login</a></Link>
        }
        <Link href='/protected' ><a>Protected Route</a></Link>
      </nav>
    </div>
  )
}