import React from "react"
import { contact, content } from "../../config/Contact"
import ContactForm from "../contactForm/ContactForm"
import './Contact.scss';

const Contact = () => {
  return (
    <div className="section">
      <div id="contact" className="py-6  container is-mobile-fluid">
        <div className="columns Display is-multiline">
          <div className="column is-full item1">
            <div className="ContentData mb-6">
              <div className="content mb-1 is-medium has-text-weight-semibold	">
                {content.heading}
              </div>
              <div className="content">{content.data}</div>
            </div>
          </div>
          <div className="column item2">
            <ContactForm />
          </div>
          <div className="column is-one-fifth item3">
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
    </div>
  )
}

export default Contact
