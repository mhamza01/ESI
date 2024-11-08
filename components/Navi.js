import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navi.module.css'



// Navigation Bar

const Navi = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    
    return(
        <nav>
            <div>
                <div >
                        <Link href="/" >
                        <a className={styles.brand} href="gallery.html">Gardner's Effect Size</a></Link>
                </div>
                <div className={styles.nav}>
                        <Link href="/" >
                        <button  className={styles.button0} href="/">Home</button></Link>
                        <Link href="/illustrator" >
                        <button  className={styles.button1} href="/illustrator">ESI</button></Link>
                        <Link href="/guide" >
                        <button  className={styles.button2} href="/guide">Guide</button></Link>
                        <Link href="/information" >
                        <button  className={styles.button3} href="/information">Information</button></Link>
                        <Link href="/contact" >
                        <button  className={styles.button4} href="/contact">Contact</button></Link>
                </div>
            </div>
        </nav>
    )
    };
   
    export default Navi;