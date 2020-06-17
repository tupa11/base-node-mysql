const models = require("../models/index");

module.exports = function (validator) {

  validator.registerAsync("unique", async function (
    value,
    requirement,
    attribute,
    cb
  ) {
    requirement = requirement.split(",");
    let condition = new Object();
    condition[requirement[1]] = value;
    const model = await models[requirement[0]].findOne({
      where: condition,
    });
    if (model) {
      return cb(false)
    } else {
      return cb();
    }
  });

  return validator;
};
