"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = ({ weather, news, date, url }) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date().toLocaleDateString().replace(/\. /g, '-').replace('.', '');
    let message = {
        username: '알림봇',
        content: `📨 ${today} 오늘이 시작됐어요!`,
        embeds: [],
    };
    message.embeds.push({
        fields: [
            {
                name: '📅 날짜 / 한국',
                value: `${today} ${date ? '(' + date + ')' : ''}`,
                inline: true
            },
            {
                name: '🏞️ 날씨 / 삼례',
                value: weather.weather,
                inline: true
            },
            {
                name: '🌡 온도 / 삼례',
                value: weather.temp,
                inline: true
            }
        ],
        footer: {
            text: '제작자 : annyhpk'
        },
    });
    message.embeds.push({
        title: '📰 뉴스 / 구글',
        description: news
    });
    yield axios_1.default.post(url, message);
});
