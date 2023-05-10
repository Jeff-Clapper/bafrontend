import styles from "./header.module.css"

// Children seems to be a built in option
const Header = ({children}) => {
    return (
        <header className={styles.row}>
            <div className={styles.bannerLogo}>
                <img className={styles.logo} src="./high-res-black-logo.jpg" alt="logo" />
            </div>
            <div className={styles.bannerContent}>
                <div className={styles.section}>
                        <a>Solutions</a>
                    </div>
                    <div className={styles.section}>
                        <a>Who We Are</a>
                    </div>
                    <div className={styles.section}>
                        <a>Contact Us</a>
                    </div>
                </div>
        </header>
    );
};

export default Header;