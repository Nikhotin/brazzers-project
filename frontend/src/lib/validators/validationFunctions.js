import * as yup from 'yup';
import { cyrillicRegexp } from './index';

yup.addMethod(yup.string, 'ru', function (message) {
  return this.matches(cyrillicRegexp, message);
});

yup.addMethod(yup.string, 'ruPhone', function (message) {
  return this.test('checkPhone', message, function (phone) {
    if (phone) {
      const phonePaths = phone.split(' ');
      let checkPhoneIsValid = true;

      if (phonePaths.length === 5) {
        phonePaths.map((el, index) => {
          if (index === 0 && el !== '+7') checkPhoneIsValid = false;
          if (
            (index === 1 || index === 2) &&
            !(typeof el === 'string' && el.length === 3 && !isNaN(parseInt(el)))
          )
            checkPhoneIsValid = false;
          if (
            (index === 3 || index === 4) &&
            !(typeof el === 'string' && el.length === 2 && !isNaN(parseInt(el)))
          )
            checkPhoneIsValid = false;
        });
      } else {
        checkPhoneIsValid = false;
      }
      return (
        checkPhoneIsValid ??
        this.createError({ message: message, path: 'phone' })
      );
    }

    return false;
  });
});
