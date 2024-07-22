function isValidPassword(input) {
  const isLengthValid = input.length > 6;

  if (!isLengthValid) {
    throw new Error("password length should be greater than 6");
  }

  if (!hasOneSpecialChar(input)) {
    throw new Error("password should contain at least one special character");
  }

  return true;
}

function hasOneSpecialChar(input) {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return format.test(input);
}

module.exports = { isValidPassword };
