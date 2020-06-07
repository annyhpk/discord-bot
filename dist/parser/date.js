"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
var date_json_1 = require("./data/date.json");
exports.parser = function () {
    var date = new Date();
    var today = date.getMonth() + 1 + "-" + date.getDate();
    console.log('✅ 날짜 파싱 완료');
    return date_json_1.default[today] || null;
};
