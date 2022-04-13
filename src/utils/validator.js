const formatEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

const validator = (type, value) => {
  switch (type) {
    case 'email':
      if (formatEmail.test(value)) {
        return {
          error: '',
        };
      }
      return {
        error: 'Email is not valid',
        value,
      };

    case 'password':
      if (value.length >= minPasswordLength) {
        return {
          error: '',
        };
      }
      return {
        error: `Password most be at least ${minPasswordLength} characters long`,
        value,
      };
    default:
      return {
        error: '',
        value,
      };
  }
};

export default validator;
