const handle = require("./index");

module.exports = async (req, res, next) => {
    let validation = {
        data: req.body,
        rules: {
            email: "required|email",
            password: "required",
        },
        attributes: {
            email: "Email",
            password: "Mật khẩu",
        },
        messages: {
            required: ":attribute không được để trống",
            email: ":attribute phải là email"
        },
    };
    return handle(req, res, next, validation);
};
