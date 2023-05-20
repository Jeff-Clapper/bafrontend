import React, { useState } from "react";
import Hamburger from "./hamburger"
import HeaderLinks from "./headerLinks";
import styles from "./headerLinksCompact.module.css"

const HeaderLinksCompact = (props) => {
    const [ isClicked, setIsClicked ] = useState(false)

    const changeIsClicked = (value) => {
        setIsClicked(value)
    }

    return (
        <>
            { isClicked ? 
                (<div className = { styles.dropDownLinks }>
                    <HeaderLinks questionaireSetter={ props.questionaireSetter } flexDirection={ props.flexDirection }/>
                </div> ) : 
                (<div className = { styles.dropDown }>
                    <Hamburger isClickedSetter={ changeIsClicked } /> 
                </div>)
            }
        </>
        // <div className = { styles.dropDown }>
        //         {/* { isClicked ? 
        //             (<div className = { styles.dropDownLinks}>
        //                 <HeaderLinks questionaireSetter={ props.questionaireSetter } flexDirection={ props.flexDirection }/>  
        //             </div> ) : null 
        //         } */}
        // </div>
    )};


export default HeaderLinksCompact;