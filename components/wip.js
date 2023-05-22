import styles from "./wip.module.css"
import ReturnHome from "./returnHome"

const Wip = ({ currentPageSetter }) => {
    return (
        <div className={ styles.wipBody }>
            <h3 className={ styles.wipTitle }>This page is under construction. Pleae come back again once we have finished construction this page. Thank you for your understanding!</h3>
            <ReturnHome currentPageSetter={ currentPageSetter } />
        </div>

    )}

export default Wip