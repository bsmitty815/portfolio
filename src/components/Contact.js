// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xayazjay");
    if (state.succeeded) {
        return <p>Thank You! I will respond as quickly as possible. Have a great day!</p>;
    }

    return (

        <div>
            <div className="form-container">
                <h1>Contact Me</h1>

                <form onSubmit={handleSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="text">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text" 
                            name="name"
                            className="form-control"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className="form-control"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="field">
                        <label>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" className="ui black button" disabled={state.submitting}>
                        Submit
                    </button>
                    </form>
            </div>  
        </div>
    )
}

export default Contact