import React from "react"
import { Formik, Form, Field } from "formik";
import './ContactForm.scss';
import { subject } from "../../config/Contact";

const ContactForm = () => {

    const ChangeColor = () => {
        console.log('selected');
    }
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
            }}
            onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
            }}
        >
            {() => (
                <Form className="ContactForm">
                    <div className="columns">
                        <div className="column">
                            <Field name="name" placeholder="Name:" className="input" />
                        </div>
                        <div className="column">
                            <Field name="email" placeholder="Email:" className="input" />
                        </div>
                        <div className="column">
                            <Field name="subject" as="select" className="select control" >
                                <option className="PlaceholderOption" value="" disabled selected>Select your option</option>
                                {subject.map((subject, index) => <option className="py-2 is-underlined" key={index} value={subject.data}>{subject.data}</option>)}
                            </Field>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Field name="message" placeholder="Your Message (max 300 Characters)" rows="10" component="textarea" className="textarea" />
                        </div>
                    </div>
                    <button type="submit" className="button is-rounded is-uppercase has-text-weight-medium">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
