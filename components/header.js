import styles from "./header.module.css"
import HeaderLinks from "./headerLinks"
import HeaderLinksCompact from "./headerLinksCompact"

// Children seems to be a built in option
const Header = ( props ) => {
    let flexDirection="row"
    let width = 600;
    let smallScreen = false;

    if ( props.screenSize ){
        width = props.screenSize.width;
    };
    if ( width < 600 ) {
        flexDirection="column";
        smallScreen = true
    };


    return (
        <>
            <header className={ `${smallScreen ? styles.rowSmallScreen :  styles.row }` }>
                <div className={ styles.bannerLogo }>
                    <img className={ styles.logo } src="./high-res-white-logo.jpg" alt="logo" />
                </div>
                { smallScreen ? <HeaderLinksCompact currentPageSetter={ props.currentPageSetter } flexDirection={ flexDirection } /> : <HeaderLinks currentPageSetter={ props.currentPageSetter } flexDirection={ flexDirection }/> }
            </header>
            <div className={ styles.rowBorder }></div>
        </>
    );
};

export default Header;