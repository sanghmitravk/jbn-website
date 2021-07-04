import React from "react"
import { contact, content } from "../../config/Contact"
import ContactForm from "../contactForm/ContactForm"
import './Contact.scss';

const Contact = () => {
  return (
    <div className="py-6 container ">
      <div className="ContentData mb-6">
        <div className="content mb-1 is-medium has-text-weight-semibold	">
          {content.heading}
        </div>
        <div className="content">{content.data}</div>
      </div>
      <div className="columns">
        <div className="column">
          <ContactForm />
        </div>
        <div className="column is-one-fifth">
          {contact.map((contact, index) =>
            contact.label === "Address" ? (
              <div className="pb-5" key={index}>
                <a
                  className="has-text-black"
                  href={contact.redirect}
                  dangerouslySetInnerHTML={{ __html: `${contact.data}` }}
                  target="_blank"
                />
              </div>
            ) : (
              <div key={index}>
                <a className="has-text-black" href={contact.redirect}>
                  {contact.data}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
