import PropTypes from 'prop-types';
import { FormikForm, AddContactBtn } from './contactform.styled';
import shortid from 'shortid';
import { Component } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  username: '',
  number: '',
};

const userReq = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const userWarning = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;

let schema = yup.object().shape({
  username: yup.string().min(3).matches(userReq, userWarning).required(),
});

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
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit} validationSchema={schema}>
        <FormikForm>
          <label>
            Name
            <br />
            <Field type="text" name="username" required />
            <ErrorMessage name="username" />
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
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
