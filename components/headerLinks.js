import styles1 from "./headerLinks.module.css"
import styles2 from "./headerLinks.cell.module.css"

const HeaderLinks = (props) => {
    let styles = styles1;
    if (props.flexDirection=="column"){
        styles = styles2;
    }

    return (
        <div className={styles.bannerContent}>
            <div className={styles.section}>
                <a>Solutions</a>
            </div>
            <div className={styles.section}>
                <a>Who We Are</a>
            </div>
            <div className={styles.section}>
                <a onClick={() => {props.questionaireSetter()}}>Contact Us</a>
            </div>
        </div>
    )
}

export default HeaderLinks;