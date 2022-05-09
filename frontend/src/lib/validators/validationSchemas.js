import * as yup from 'yup';
import {
  errorRequired,
  errorEmailInvalid,
  errorPasswordValidation,
} from '../constants';
import { errorMessage } from '../helpers/errorMessages';

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorEmailInvalid)
    .max(40, errorMessage('Email', 40))
    .required(errorRequired),
  password: yup.string().max(16, errorMessage('Пароль', 16)).required(errorRequired),
});

export const passwordValidationShema = yup.object().shape({
  password: yup.string().max(16, errorMessage('Пароль', 16)).required(errorRequired),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают').required(errorRequired)
});
export const RegistrationSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorEmailInvalid)
    .max(40, errorMessage('Email', 40))
    .required(errorRequired),
  name: yup.string().max(40, errorMessage('Имя', 40)).required(errorRequired),
  surname: yup.string().max(40, errorMessage('Фамилия', 40)).required(errorRequired),
  password: yup.string().max(16, errorMessage('Пароль', 16)).required(errorRequired),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], errorPasswordValidation).required(errorRequired)
});
