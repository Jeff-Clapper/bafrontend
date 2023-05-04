import React, { useEffect, useState } from "react";
import styles from "./questionaire.module.css"


const Questionaire = ({questionaireSetter}) => {
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
        await fetch('http://localhost:5824/request/quote', {
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

    return (
        <div>
            <h3>We are excited for the opportunity to get to know you, your company, and your companies needs.</h3>
            <form onSubmit={submit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={requestor.name} 
                        name="name" 
                        onChange={change}
                    />
                </div>
                <div>
                    <label>Company:</label>
                    <input 
                        type="text" 
                        value={requestor.company} 
                        name="company" 
                        onChange={change}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={requestor.email} 
                        name="email" 
                        onChange={change}
                    />
                </div>
                <div className="contactButtonExterior" onClick={submit}>
                    <div className="contactButtonInterior">
                        Submit
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Questionaire;