import styles from "./contactUs.module.css"

const ContactUs = ({ currentPageSetter }) => {
    return (
        <div className={ styles.contactRow }>
            <button className="contactButtonInterior" onClick={ () => {currentPageSetter("quoteRequest")} }>
                Contact Us
            </button>
        </div>
    )
}

export default ContactUs;