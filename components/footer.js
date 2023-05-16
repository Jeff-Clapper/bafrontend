import styles from "./footer.module.css"

const Footer = ({questionaireSetter}) => {
    return (
        <div className={ styles.row }>
            <div className={ styles.data }>
                <div className={ styles.section }>
                    <a>About Us</a>
                </div>
                <div className={ styles.section }>
                    <a onClick={() => {questionaireSetter()}}>Contact Us</a>
                </div>
                <div className={ styles.section }>
                    <a>Careers</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;