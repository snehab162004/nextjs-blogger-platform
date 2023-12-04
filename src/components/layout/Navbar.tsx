import styles from '@/styles/navbar.module.scss'
import { SignInButton, UserButton, useAuth } from '@clerk/nextjs'

const Navbar = () => {
    const {isSignedIn} = useAuth();

    return<>
    <nav className={styles.navbar__container}>
    <div className={styles.navabar__logo}>
        <h1>Logo</h1>
    </div>
    <div className={styles.navbar__cta}>
        {
            isSignedIn ? <UserButton /> : <SignInButton />
        }
    </div>
    </nav>
    </>
}

export default Navbar