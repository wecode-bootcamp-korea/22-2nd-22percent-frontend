export function checkEmail(email) {
  const reg_email =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg_email.test(email);
}

export function checkPwd(pwd) {
  const reg_pwd =
    /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return reg_pwd.test(pwd);
}
