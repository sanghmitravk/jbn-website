import React from "react"
import { Formik, Form, Field, getIn, ErrorMessage } from "formik";
import './ContactForm.scss';
import { subject } from "../../config/Contact";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    subject: Yup.string()
        .required(),
    email: Yup.string().email().required(),
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
                file: ""
            }}
            onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
                actions.setStatus({
                    sent: true,
                    msg: 'Thank you, we aim to respond within 24 hours.'
                })
                // actions.resetForm();
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={SignupSchema}
        >
            {({ errors, touched, isSubmitting, status, setFieldValue }) => (

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
                        <div className="column" >
                            <div style={getStyles(errors, 'message')}>
                                <Field name="message" placeholder="Your Message (max 300 Characters)" rows="10"
                                    component="textarea" className="textarea"

                                />
                                <div className="ChooseFile">
                                    <input id="file" name="file" type="file"
                                        onChange={(event: any) => {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                        }} />
                                        <p><div id="file"  /></p>
                                    <div className="is-flex p-3">
                                        <a className="is-clickable"  >Attach a File.</a> &nbsp;
                                        <p>Word or PDF only (max 10mb)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-align-items-center">
                        <div className="column is-narrow ">
                            <button type="submit" disabled={isSubmitting} className="button is-rounded is-uppercase has-text-weight-medium">Submit</button>
                        </div>
                        {((touched.name && errors.name) ||
                            (touched.email && errors.email) ||
                            (touched.subject && errors.subject) ||
                            (touched.message && errors.message)) &&
                            <div className="column is-narrow" style={{ color: 'red', fontSize: '0.8rem' }}>Please submit missing information</div>}
                        {status && <div className="column has-text-weight-bold">
                            {status.msg}
                        </div>}
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
