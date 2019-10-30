const baseUrl = 'https://obayomi-banka.herokuapp.com/api/v1';

const signupUrl = () => {
  const url = `${baseUrl}/auth/signup`;
  return url;
};

const loginUrl = () => {
  const url = `${baseUrl}/auth/signin`;
  return url;
};

// const createAccountUrl = () => {
//   const url = `${baseUrl}/accounts`;
//   return url;
// };

// const getAccountUrl = () => {
//   const email = "martinsoluwaseun47@gmail.com";
//   const email = localStorage.getItem('email');
//   const url = `${baseUrl}/user/${email}/accounts`;
//   return url;
// };

export {
  signupUrl,
  loginUrl,
  // createAccountUrl,
  // getAccountUrl,
};
