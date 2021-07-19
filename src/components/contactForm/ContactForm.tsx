import React, { useState } from "react"
import { Formik, Form, Field, getIn } from "formik";
import './ContactForm.scss';
import { subject } from "../../config/Contact";
import * as Yup from 'yup';
import axios from 'axios';
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

const toBase64 = (file: Blob, removePrefix = false) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const result = reader.result;
        return resolve(removePrefix ? result?.split(',')[1] : result);
    }
    reader.onerror = error => reject(error);
});

const ContactForm = () => {
    const [fileName, setFileName] = useState(null)
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
                file: null
            }}
            onSubmit={async (values, actions) => {
                console.log(JSON.stringify(values, null, 2))
                console.log(JSON.stringify(
                    {
                        fileName: values.file.name,
                        type: values.file.type,
                        size: `${values.file.size} bytes`,
                        path: values.file.path
                    },
                    null,
                    2
                ))

                setFileName(null);
                actions.setSubmitting(false)
                const appURL = 'http://localhost:3000/sendmail';
                axios.post(appURL, {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    subject: values.subject,
                    fileName:values.file.name,
                    file: await toBase64(values.file)
                })
                    .then(function (response: any) {
                        console.log(response);
                        if (response.status === 200) {
                            actions.setStatus({
                                sent: true,
                                msg: 'Thank you, we aim to respond within 24 hours.'
                            })
                            actions.resetForm();
                        }

                    })
                    .catch(function (error: any) {
                        console.log(error);
                        actions.setStatus({
                            sent: true,
                            msg: 'We regret to say that something is wrong in our end.'
                        })
                    });
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
                                <div className="ChooseFile" >
                                    <input id="file" name="file" type="file" disabled={isSubmitting}
                                        accept=".doc, .pdf"
                                        onChange={(event: any) => {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                            setFileName(event.currentTarget.files[0].name)
                                        }} />
                                    {fileName && <div className="pl-3">{fileName}</div>}
                                    <div className="is-flex p-3">
                                        <div className="is-clickable"> <a className="is-clickable">Attach a File.</a></div> &nbsp;
                                        <div>Word or PDF only (max 10mb)</div>
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
