import { useState, useEffect } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Questionaire from "./questionaire"


const Application = () => {
    const [questionaireState, setQuestionaireState] = useState();
    const [showComponent, setShowComponent] = useState(false);
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    const changeQuestionaireState = () => {
        questionaireState ? setQuestionaireState(false) : setQuestionaireState(true)
    }

    function getCurrentDimension(){
        useEffect(()=> {
            setScreenSize({width: window.innerWidth, height: window.innerHeight})
        }, [])
    }

    // useEffect(() => {
    //     const updateDimension = () => {
    //         setScreenSize(getCurrentDimension())
    //     }
    //     window.addEventListener('resize', updateDimension);

    
    //     return(() => {
    //         window.removeEventListener('resize', updateDimension);
    //     })
    // }, [screenSize])


    return (
            <div>
                {/* Make this it's own component */}
                {/* <div className="introImg">
                    <img src="./razvan-chisu-Ua-agENjmI4-unsplash.jpg" id="introImg"></img>
                    <div className="intro">
                        <img src="./high-res-black-logo.jpg" className="introLogo"></img>
                        <h2 className="introHeader">You want to grow. We want to help.</h2>
                    </div>
                </div> */}

                <Header questionaireSetter = { changeQuestionaireState } screenSize= { screenSize } />
                { questionaireState ? <Questionaire questionaireSetter = { changeQuestionaireState } screenSize= { screenSize } /> : <Body questionaireSetter = { changeQuestionaireState } screenSize= { screenSize }/> }
                <Footer questionaireSetter = { changeQuestionaireState }/>
            </div>
    )
};

export default Application;