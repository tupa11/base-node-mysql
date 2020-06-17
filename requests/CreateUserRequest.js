const handle = require("./index");

module.exports = async (req, res, next) => {
  let validation = {
    data: req.body,
    rules: {
      firstName: "required|max:20",
      lastName: "required|max:20",
      email: "required|email|unique:User,email",
      password: "required",
    },
    attributes: {
      firstName: "Tên",
      lastName: "Họ",
      email: "Email",
      password: "Mật khẩu",
    },
    messages: {
      required: ":attribute không được để trống",
      email: ":attribute phải là email",
      max: ":attribute phải nhỏ hơn :max",
      unique: ":attribute đã tồn tại"
    },
  };
  return handle(req, res, next, validation);
};
