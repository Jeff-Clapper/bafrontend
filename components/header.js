import styles1 from "./header.module.css"
import styles2 from "./header.cell.module.css"

// Children seems to be a built in option
const Header = ({questionaireSetter, screenSize}) => {
    let styles = styles1;
    if (screenSize.width < 600){
        styles = styles2;
    }

    return (
        <>
            <header className={styles.row}>
                <div className={styles.bannerLogo}>
                    <img className={styles.logo} src="./high-res-white-logo.jpg" alt="logo" />
                </div>
                <div className={styles.bannerContent}>
                    <div className={styles.section}>
                            <a>Solutions</a>
                        </div>
                        <div className={styles.section}>
                            <a>Who We Are</a>
                        </div>
                        <div className={styles.section}>
                            <a onClick={() => {questionaireSetter()}}>Contact Us</a>
                        </div>
                    </div>
            </header>
            <div className={styles.rowBorder}></div>

        </>
    );
};

export default Header;