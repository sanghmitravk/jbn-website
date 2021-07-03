import React from "react"
import { Formik, Form, Field } from "formik";
import './ContactForm.scss';

const ContactForm = () => {
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
                            <div className="field">
                                <div className="control">
                                    <Field className="input" type="text" placeholder="Name" />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <Field name="email" placeholder="Email:" className="control" />
                        </div>
                        <div className="column">
                            <Field name="subject" placeholder="Subject:" type="select" className="control" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Field name="message" placeholder="Your Message (max 300 Character):" component="textarea" className="control" />
                        </div>
                    </div>
                    <button type="submit" className="button is-rounded is-uppercase has-text-weight-medium">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
