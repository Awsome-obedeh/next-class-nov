
import Navbar from '@/components/Navbar'
import styles from './page.module.css'
export default function About(){
    let y=2
    let x=7
    let sum=y+x
    console.log(sum)

    return(

        <>
     
        <h2 className="about">This is my about page</h2>
        <h3 className={styles.text}>styled with modeule css</h3>
        
        </>
    )
}