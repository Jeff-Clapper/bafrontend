import styles from "./contactUs.module.css"

const ContactUs = ({questionaireSetter}) => {
    // const activateQuestionaire = () => {
    //     setQuestionaireActive()
    // }

    return (
        <div className={styles.contactRow}>
            <button className="contactButtonExterior" onClick={() => {questionaireSetter()}}>
                <div className="contactButtonInterior">
                    Contact Us
                </div>
            </button>
        </div>
    )
}

export default ContactUs;