import { useState, useEffect } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Questionaire from "./questionaire"
import Wip from "./wip";


const Application = () => {
    const [currentPageState, setCurrentPageState] = useState("home");
    const [screenSize, setScreenSize] = useState(useEffect(()=> {
        setScreenSize({width: window.innerWidth, height: window.innerHeight})
    }, []));


    const changeCurrentPageState = ( value ) => {
        setCurrentPageState( value );
    }


    // useEffect(() => {
    //     const updateDimension = () => {
    //     Below used to be "setScreenSize(deletedFunction())""
    //         setScreenSize(useEffect(()=> {setScreenSize({width: window.innerWidth, height: window.innerHeight}) }, []))
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

                <Header currentPageSetter = { changeCurrentPageState } screenSize= { screenSize } />
                { currentPageState =="quoteRequest" ? <Questionaire currentPageSetter = { changeCurrentPageState } screenSize= { screenSize } /> : currentPageState =="wip" ? <Wip currentPageSetter = { changeCurrentPageState } /> : <Body currentPageSetter = { changeCurrentPageState } screenSize= { screenSize }/> }
                <Footer currentPageSetter = { changeCurrentPageState }/>
            </div>
    )
};

export default Application;