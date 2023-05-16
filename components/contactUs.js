import styles from "./contactUs.module.css"

const ContactUs = ({questionaireSetter}) => {
    // const activateQuestionaire = () => {
    //     setQuestionaireActive()
    // }

    return (
        <div className={styles.contactRow}>
            <button className="contactButtonInterior" onClick={() => {questionaireSetter()}}>
                Contact Us
            </button>
        </div>
    )
}

export default ContactUs;