import React from "react"
import { Formik, Form, Field, getIn } from "formik";
import './ContactForm.scss';
import { subject } from "../../config/Contact";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    subject: Yup.string()
        .required(),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .max(20)
        .required(),
});

function getStyles(errors: any, fieldName: string) {
    if (getIn(errors, fieldName)) {
        return {
            border: '1px solid red'
        }
    }
}

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
                actions.resetForm();
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={SignupSchema}
        >
            {({ errors, isSubmitting, setFieldValue, status }) => (
                <Form className="ContactForm">
                    <div className="columns">
                        <div className="column">
                            <Field name="name" placeholder="Name:" className="input" style={getStyles(errors, 'name')} />
                        </div>
                        <div className="column">
                            <Field name="email" placeholder="Email:" className="input" style={getStyles(errors, 'email')} />
                        </div>
                        <div className="column">
                            <Field name="subject" as="select" className="select control" style={getStyles(errors, 'subject')}  >
                                <option className="PlaceholderOption" value="" disabled selected>Select your option</option>
                                {subject.map((subject, index) => <option className="py-2 is-underlined" key={index} value={subject.data}>{subject.data}</option>)}
                            </Field>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Field name="message" placeholder="Your Message (max 300 Characters)" rows="10"
                                component="textarea" className="textarea"
                                style={getStyles(errors, 'message')}
                            />
                            {/* <Field id="file" name="file" type="file" onChange={(event: any) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                            }} /> */}
                        </div>
                    </div>
                    <div className="columns is-align-items-center">
                        <div className="column is-narrow ">
                            <button type="submit" disabled={isSubmitting} className="button is-rounded is-uppercase has-text-weight-medium">Submit</button>
                        </div>
                        <div className="column ">
                            Please submit missing information || Thank you, we aim to respond within 24 hours.
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
