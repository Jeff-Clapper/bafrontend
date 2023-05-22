import styles from "./headerLinks.module.css"

const HeaderLinks = ( props ) => {
    return (
        <div className={ `${ props.flexDirection == "column" ? styles.bannerContentSmallScreen : styles.bannerContent }` }>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a onClick={ () => { props.currentPageSetter("wip") } }>Solutions</a>
            </div>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a onClick={ () => { props.currentPageSetter("wip") } }>Who We Are</a>
            </div>
            <div className={ `${ props.flexDirection == "column" ? styles.sectionSmallScreen : styles.section}` }>
                <a onClick={ () => { props.currentPageSetter("quoteRequest") } }>Contact Us</a>
            </div>
        </div>
    )
}

export default HeaderLinks;