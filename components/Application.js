import { useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Questionaire from "./questionaire"



const Application = () => {
    const [questionaireState, setQuestionaireState] = useState();
    const changeQuestionaireState = () => {
        questionaireState ? setQuestionaireState(false) : setQuestionaireState(true)
    }

    return (
            <>
                {/* Make this it's own component */}
                {/* <div className="introImg">
                    <img src="./razvan-chisu-Ua-agENjmI4-unsplash.jpg" id="introImg"></img>
                    <div className="intro">
                        <img src="./high-res-black-logo.jpg" className="introLogo"></img>
                        <h2 className="introHeader">You want to grow. We want to help.</h2>
                    </div>
                </div> */}
                <Header questionaireSetter = { changeQuestionaireState } /> 
                {
                    questionaireState ? <Questionaire questionaireSetter = { changeQuestionaireState }/> : <Body questionaireSetter = { changeQuestionaireState }/> 
                }
                <Footer questionaireSetter = { changeQuestionaireState }/>
            </>
    )
};

export default Application;