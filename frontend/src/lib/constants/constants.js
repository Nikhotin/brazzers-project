export const siteProtocol = process.env.NEXT_PUBLIC_SITE_PROTOCOL || '';
export const siteDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN || '';
export const apiPath = process.env.NEXT_PUBLIC_API_PATH || '';
export const apiURL = 'http://95.142.35.161:80/';

// `${siteProtocol}${siteDomain}${apiPath}` || '';

export const defaultPageTitle = 'Skillmaps';
export const defaultMeta = 'Skillmaps';

export const orderStatuses = {
  formed: 'На согласовании',
  processed: 'На рассмотрении',
  awaiting_payment: 'Ожидает оплаты',
};

export const smsRequestsTimeout = 60000;

export const buttonType = ['google', 'facebook', 'github', 'atlassian'];
