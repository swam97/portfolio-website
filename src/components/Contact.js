// components/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Section, Title, FormField, FormButton, ErrorText } from '../styles';

const Contact = () => {
    const sendEmail = (values, { setSubmitting, resetForm }) => {
        const serviceID = 'service_0gu52gm';
        const templateID = 'template_8tyhpo7';

        emailjs.send(serviceID, templateID, values)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
                setSubmitting(false);
                resetForm();
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message. Please try again later.');
                setSubmitting(false);
            });
    };

    return (
        <Section>
            <Title>Contact Me</Title>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    message: Yup.string().required('Required'),
                })}
                onSubmit={(values, actions) => {
                    sendEmail(values, actions);
                }}
            >
                <Form>
                    <FormField>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" component={ErrorText} />
                    </FormField>
                    <FormField>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component={ErrorText} />
                    </FormField>
                    <FormField>
                        <label htmlFor="message">Message</label>
                        <Field name="message" as="textarea" rows="4" />
                        <ErrorMessage name="message" component={ErrorText} />
                    </FormField>
                    <FormButton type="submit">Submit</FormButton>
                </Form>
            </Formik>
        </Section>
    );
};

export default Contact;
