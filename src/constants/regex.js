const REGEX = Object.freeze({
  email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
  userIdPattern: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,16}$/,
  passwordPattern:
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
});

export default REGEX;
