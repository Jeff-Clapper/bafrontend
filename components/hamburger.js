import styles from "./hamburger.module.css"

const Hamburger = ({ isClickedSetter }) => {
    return (
        <div className={ styles.hamburger }>
            <img className="hamburgerImage" src="./hamburgerMenu.png"  onClick={ () => isClickedSetter(true) }/>
        </div>
    )
}

export default Hamburger

