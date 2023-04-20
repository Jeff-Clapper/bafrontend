import styles from "./banner.module.css"

// Children seems to be a built in option
const Banner = ({children}) => {
    return (
        <header className="row">
            <div className={styles.bannerLogo}>
                <img className={styles.logo} src="./high-res-black-logo.jpg" alt="logo" />
            </div>
            <div className="col-7 mt-5">
                <h3 className={styles.bannerPhrase}>{children}</h3>
            </div>
        </header>
    );
};

export default Banner;