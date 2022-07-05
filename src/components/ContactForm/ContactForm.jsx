import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Field, Formik } from 'formik';
import { Box } from 'components/Box/Box';
import { InputTitle, InputField, AddBtn } from './ContactForm.styled';

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };
  render() {
    return (
      <Formik initialValues={this.initialValues} onSubmit={this.props.submit}>
        <Form autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p="l"
          >
            <InputField htmlFor="name">
              <InputTitle>Name</InputTitle>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </InputField>
            <InputField htmlFor="number">
              <InputTitle>Phone</InputTitle>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </InputField>
            <AddBtn type="submit">Add Contact</AddBtn>
          </Box>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export { ContactForm };
