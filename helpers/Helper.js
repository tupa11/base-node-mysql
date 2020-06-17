
class Helper {
    constructor() {}

    static jsonData(code, message, data = null) {
        let result = {
            code: code,
            message: message,
        }
        data ? (result.data = data) : '';
        return result;
    }
}

module.exports = Helper;