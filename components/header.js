import styles1 from "./header.module.css"
import styles2 from "./header.cell.module.css"
import HeaderLinks from "./headerLinks"
import HeaderLinksCompact from "./headerLinksCompact"

// Children seems to be a built in option
const Header = (props) => {
    let flexDirection="row"
    let width = 600;
    let styles = styles1;
    let smallScreen = false;

    if (props.screenSize){
        width = props.screenSize.width;
    };
    if (width < 600) {
        flexDirection="column";
        styles = styles2;
        smallScreen = true
    };


    return (
        <>
            <header className={ styles.row }>
                <div className={ styles.bannerLogo }>
                    <img className={ styles.logo } src="./high-res-white-logo.jpg" alt="logo" />
                </div>
                { smallScreen ? <HeaderLinksCompact questionaireSetter={ props.questionaireSetter } flexDirection={ flexDirection } /> : <HeaderLinks questionaireSetter={ props.questionaireSetter } flexDirection={ flexDirection }/> }
            </header>
            <div className={ styles.rowBorder }></div>
        </>
    );
};

export default Header;