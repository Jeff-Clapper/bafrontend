import React, { useState } from "react";
import Hamburger from "./hamburger"
import HeaderLinks from "./headerLinks";
import styles from "./headerLinksCompact.module.css"

// Will need to adjust this as when you click a link, the dropdown still stays there

const HeaderLinksCompact = ( props ) => {
    const [ isHovered, setIsHovered ] = useState( false )

    const changeIsHovered = ( value ) => {
        setIsHovered( value );
    }

    return (
        <div className={ `${ isHovered ? styles.dropDownLinks : styles.dropDown }` }
            onMouseEnter={ () => changeIsHovered(true) }
            onMouseLeave={ () => changeIsHovered(false) }
        >
            { isHovered ? 
                ( <div className = "test">
                    <HeaderLinks currentPageSetter={ props.currentPageSetter } flexDirection={ props.flexDirection }/>
                </div> ) : 
                ( <div className = { styles.sdropDowns }>
                    <Hamburger isHoveredSetter={ changeIsHovered } />
                </div> )
            }
        </div>
    )};


export default HeaderLinksCompact;