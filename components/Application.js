import { useState } from "react";
import Banner from "./banner";
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
                <Banner> Your Cloud Support Experts </Banner>
                {
                    questionaireState ? <Questionaire questionaireSetter = {changeQuestionaireState}/> : <Body questionaireSetter = {changeQuestionaireState} bodyText="We are a veteran owned and operated cloud management company. We have a combined 10 years of working with companies
                    to provide uniquely-taylored cloud-based support to help them meet their companies demands. In today's increasingly
                    remote environment, we can assist you with what you need to succeed." /> 
                }
                <Footer />
            </>
    )
};

export default Application;