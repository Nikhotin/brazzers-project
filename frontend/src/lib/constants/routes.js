import { createRoute } from '../helpers';

const baseUrl = '';
const uploadsFolder = 'downloads';

export const termsOfUse = `${baseUrl}/${uploadsFolder}/terms-of-use.pdf`;

export const authRoute = createRoute('Аутентификация', '/auth');
export const catalogRoute = createRoute('Каталог', '/catalog');
export const forgetPassword = createRoute('Забыли пароль?', '/reset_password');
export const registerUser = createRoute(
  'Ещё нет аккаунта? Зарегистрироваться',
  '/registration'
);
export const backToAuth = createRoute('Вернуться ко входу в систему', '/auth', {
  textAlign: 'left',
});
export const alreadyHasAccount = createRoute(
  'Уже есть аккаунт? Войти',
  '/auth'
);

export const headerRoutes = [catalogRoute];

export const mechanicaLink = 'https://mechanica.agency/';

export const socialLinks = {
  vk: 'https://vk.com/clubrusvinyl',
};

export const regUser = 'user/registration';
export const getEmailAddress = 'user/getEmail';
export const resetPass = '/resetPass';
