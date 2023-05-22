import styles from "./headerLinks.module.css"

const HeaderLinks = (props) => {
    return (
        <div className={ `${ props.flexDirection == "column" ? styles.bannerContentSmallScreen : styles.bannerContent }` }>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a>Solutions</a>
            </div>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a>Who We Are</a>
            </div>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a onClick={() => {props.questionaireSetter()}}>Contact Us</a>
            </div>
        </div>
    )
}

export default HeaderLinks;