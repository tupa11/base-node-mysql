const handle = require("./index");

module.exports = async (req, res, next) => {
    let validation = {
        data: req.body,
        rules: {
            name: "required",
            price: "required",
        },
        attributes: {
            name: "Tên sản phẩm",
            price: "Giá",
        },
        messages: {
            required: ":attribute không được để trống",
        },
    };
    return handle(req, res, next, validation);
};
