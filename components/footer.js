import styles from "./footer.module.css"

const Footer = ({ currentPageSetter }) => {
    return (
        <div className={ styles.row }>
            <div className={ styles.data }>
                <div className={ styles.section }>
                    <a onClick={ () => {currentPageSetter("wip")} }>About Us</a>
                </div>
                <div className={ styles.section }>
                    <a onClick={ () => {currentPageSetter("quoteRequest")} }>Contact Us</a>
                </div>
                <div className={ styles.section }>
                    <a onClick={ () => {currentPageSetter("wip")} }>Careers</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;