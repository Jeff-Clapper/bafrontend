import styles from "./body.module.css"
import ContactUs from "./contactUs";

const Body = (props) => {
    return (
        <>
            <div className="base">
                <div className={styles.aboutBlock}>
                    <h3>Who We Are</h3>
                    <p>{props.bodyText}</p>
                </div>
            </div>
            <ContactUs questionaireSetter = {props.questionaireSetter}/>
        </>

    )
};

export default Body