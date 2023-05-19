import React, { useEffect, useState } from "react";
import styles1 from "./questionaire.module.css"
import styles2 from "./questionaire.cell.module.css"


const Questionaire = ({questionaireSetter,screenSize}) => {
    const emptyRequestor = {
        name: 'name', 
        company: 'company', 
        email: 'email@email.com'
    };
    const [requestor, setQuoteRequest] = useState(emptyRequestor);
    
    const submit = (e) => {
        e.preventDefault();
        console.log(requestor);
        postRequestor(requestor);
        questionaireSetter();
    }
    const change = (e) => setQuoteRequest({ ...requestor, [e.target.name]: e.target.value});

    const postRequestor = async (requestor) => {
        // await fetch('http://localhost:5824/request/quote', {
        await fetch('https://emailbackend-rkgklr7fuq-ue.a.run.app/request/quote', {
            method: "POST",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
                // 'X-CSRFTOKEN': "",
            },
            body: JSON.stringify(requestor),
        })

        console.log("success")
    };

    let styles = styles1;
    if (screenSize && screenSize.width < 600){
        styles = styles2
    }

    return (
        <div id={ styles.questionaireBody }>
            <h3 className={ styles.questionaireTitle }>We are excited for the opportunity to get to know you, your company, and your companies needs.</h3>
            <form onSubmit={ submit } className={ styles.formInputs }>
                <div className={ styles.input }>
                    <label className={ styles.label }>Name:</label>
                    <input 
                        className={ styles.userInput }
                        type="text" 
                        value={ requestor.name } 
                        name="name" 
                        onChange={ change }
                    />
                </div>
                <div className={ styles.input }>
                    <label className={ styles.label }>Company:</label>
                    <input  
                        className={ styles.userInput }
                        type="text" 
                        value={ requestor.company } 
                        name="company" 
                        onChange={ change }
                    />
                </div>
                <div className={ styles.input }>
                    <label className={ styles.label }>Email:</label>
                    <input 
                        className={ styles.userInput }
                        type="email" 
                        value={ requestor.email } 
                        name="email" 
                        onChange={ change }
                    />
                </div>
                <div className={ styles.input }>
                    <div onClick = {submit} className="contactButtonInterior">
                        Submit
                    </div>
                </div>
                <div className={ styles.returnButton }>
                    <p onClick={() => {questionaireSetter()}}>Return to Homepage</p>
                </div>
            </form>
        </div>
    )
}

export default Questionaire;