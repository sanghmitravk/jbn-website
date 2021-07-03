import React, { HTMLAttributes } from 'react';
import { contact, content } from '../../config/Contact';

const Contact = () => {
    return <div className="py-6 container ">
        <div className="content is-medium has-text-weight-semibold	">{content.heading}</div>
        <div className="content ">{content.data}</div>
        <div className="columns">
            <div className="column">
            </div>
            <div className="column">
                {contact.map((contact, index) =>
                    <div><a href={contact.redirect}>{contact.data}</a></div>
                )
                }
            </div>
        </div>
    </div>
}

export default Contact;