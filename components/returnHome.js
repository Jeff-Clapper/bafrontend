import styles from "./returnHome.module.css"

const ReturnHome = ({ currentPageSetter }) => {
    return (
        <div className={ styles.returnButton }>
            <p onClick={ () => {currentPageSetter("home")} }>Return to Homepage</p>
        </div>
    )
}

export default ReturnHome