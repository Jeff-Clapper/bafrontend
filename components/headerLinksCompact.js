import React, { useState } from "react";
import Hamburger from "./hamburger"
import HeaderLinks from "./headerLinks";
import styles from "./headerLinksCompact.module.css"

// THIS WILL NEED TO BE TESTED ON CELL BROWSER

const HeaderLinksCompact = (props) => {
    const [ isHovered, setIsHovered ] = useState(false)

    const changeIsHovered = (value) => {
        setIsHovered(value);
    }

    return (
        <div className={ `${ isHovered ? styles.dropDownLinks : styles.dropDown }` }
            onMouseEnter={() => changeIsHovered(true)}
            onMouseLeave={() => changeIsHovered(false)}
        >
            { isHovered ? 
                (<div className = "test">
                    <HeaderLinks questionaireSetter={ props.questionaireSetter } flexDirection={ props.flexDirection }/>
                </div> ) : 
                (<div className = { styles.sdropDowns }>
                    <Hamburger isHoveredSetter={ changeIsHovered } />
                </div>)
            }
        </div>
    )};


export default HeaderLinksCompact;