export function checkEmail(email) {
  const reg_email =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg_email.test(email);
}

export function checkPwd(password) {
  const reg_pwd =
    /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return reg_pwd.test(password);
}

export const validator = {
  email: email => checkEmail(email),
  password: password => checkPwd(password),
};
