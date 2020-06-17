let Validator = require("validatorjs");
const StatusCode = require("../consts/StatusCode");
const {jsonData} = require("../helpers/Helper");

Validator = require("../helpers/Validator")(Validator);

module.exports = (req, res, next, validation) => {
  let validator = new Validator(
    validation.data,
    validation.rules, 
    validation.messages
  );
  validation.attributes
    ? validator.setAttributeNames(validation.attributes)
    : "";

  function passes() {
    next();
  }

  function fails() {
    res.json(
        jsonData(
        validation.code ? validation.code : StatusCode.BAD_REQUEST,
        validation.message
          ? validation.message
          : Object.values(validator.errors.errors)[0][0]
      )
    );
  }

  return validator.checkAsync(passes, fails);
};
