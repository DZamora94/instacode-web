import { RegisterOptions } from 'react-hook-form';

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,}$/;

export const requiredValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required'
  }
};

// TODO: On refactor remove these two
export const usernameValidations: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required'
  }
};

export const emailValidations: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required'
  }
};

export const passwordValidations: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required'
  },
  minLength: {
    value: 8,
    message: 'The password must have at least 8 characters'
  },
  pattern: {
    value: passwordRegex,
    message: 'The password must have at least a lowercase, an uppercase, a number and a symbol'
  }
};

// TODO: Create endpoint in API to retrieve valid emojis
export const emojis = ['🤡', '💃', '🍻', '✨', '👿'];
