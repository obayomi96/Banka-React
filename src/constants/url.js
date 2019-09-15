const baseUrl = 'https://obayomi-banka.herokuapp.com/api/v1';

const signupUrl = () => {
  const url = `${baseUrl}/auth/signup`;
  return url;
};

export {
  signupUrl,
};
