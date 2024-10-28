import css from './ContactForm.module.css';

import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { contacts } from '../../redux/contactsSlice'

//Validation config
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

   //State of initialValues
  const contactValue = {
    name: '',
    number: '',
};
  
 //Function to add Contact in contacts list
  const onAddContact = values => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    setContacts([...contacts, newContact]);
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };



export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  cosnt dispatch = useDispatch();

  return (
    <Formik initialValues={contactValue} validationSchema={FeedbackSchema} onSubmit={handleSubmit} >
      <Form className={css.form}>
        <label className={css.inputName} htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '12px' }} />

        <label className={css.inputName} htmlFor={phoneFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '12px' }} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
