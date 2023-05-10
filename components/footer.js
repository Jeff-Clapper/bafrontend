import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className="row">
            <div className={styles.data}>
                <div className={styles.section}>
                    <a>About Us</a>
                </div>
                <div className={styles.section}>
                    <a>Contact Us</a>
                </div>
                <div className={styles.section}>
                    <a>Careers</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;