import { FormikForm, AddContactBtn } from './contactform.styled';
import shortid from 'shortid';
import { Component } from 'react';
import { Field, Formik } from 'formik';

const initialValues = {
  username: '',
  number: '',
};

class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    const id = shortid.generate();
    const { username, number } = values;
    const contact = { username, number, id };
    this.props.onSubmit(contact);
    resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <FormikForm>
          <label>
            Name
            <br />
            <Field
              type="text"
              name="username"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number
            <br />
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </FormikForm>
      </Formik>
    );
  }
}

export default ContactForm;
