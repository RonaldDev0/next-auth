import Head from 'next/head'
import style from '../style/global.module.css'

export default function Home() {
  return (
    <div className= 'container'>
      <h1 className={style.h1}>
        Hello world
      </h1>
    </div>
  )
}