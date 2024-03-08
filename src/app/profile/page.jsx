import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
            <Image width={300} height={400} alt='obed' src={"https://images.unsplash.com/photo-1709403343088-732c888fdc6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"}/>
            <p>Obed</p>
            <p>obed is a software dev, and ........</p>
            <Link href="/profile/obed"> <button>see more</button></Link>
      </div>
      <div className={styles.profile}>
             <Image width={300} height={400} alt='raph' src={"https://plus.unsplash.com/premium_photo-1709059961525-b9d83a3e476b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"}/>
        
        
            <p>raph</p>
            <p>raph is a wtf, and ........</p>
            <Link href="/profile/raph"> <button>see more</button></Link>
          
      </div>
      <div className={styles.profile}>
            <Image width={300} height={400} alt='tunde' src={"https://images.unsplash.com/photo-1709428730946-0216f94179fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"}/>
            <p>tunde</p>
            <p>tunde is a seasoned trader ,dev, and ........</p>
            <Link href="/profile/tunde"> <button>see more</button></Link>
      </div>
      <div className={styles.profile}>
            <Image width={300} height={400} alt='victor' src={"https://images.unsplash.com/photo-1709771695454-bc187caca916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}/>
            <p>victor</p>
            <p>victor is a cinematographer,photographer,graphic desingner, dev, and ........</p>
            <Link href="/profile/vic"> <button>see more</button></Link>
      </div>
    </div>
  )
}
