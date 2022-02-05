import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }


    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor='name'>Name: </label> */}
                    <input type="text" className='input' placeholder='Name' name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    {/* <label htmlFor='email'>Email: </label> */}
                    <input type="text" className='input' placeholder="Email" name="email" width="100%" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    {/* <label htmlFor='message'>Message:</label> */}
                    <textarea name="message" className='message' placeholder="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <button className="button" onClick={() => window.location = 'mailto:holmesjillanne@gmail.com'}>Email Me Instead!</button>
        </section>
    )
}



export default ContactForm;