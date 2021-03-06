export const Validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.subject) {
    errors.subject = 'Required';
  }
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.presentLoc) {
    errors.presentLoc = 'Required';
  }

  return errors;
};
