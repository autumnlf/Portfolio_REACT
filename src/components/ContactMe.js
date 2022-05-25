import React from 'react';

function ContactMe() {
    return (
        <section id='contactForm'>
            <h2>Contact Me</h2>
            <div id="lineBreak"></div>

            <form>
                <h3>Name</h3>
                <input></input>

                <h3>Email</h3>
                <input></input>

                <h3>Message</h3>
                <textarea></textarea>

                <button id='submitBtn'>Submit</button>
            </form>
        </section>
    );
}

export default ContactMe;