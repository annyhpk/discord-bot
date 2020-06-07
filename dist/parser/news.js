var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import cheerio from 'cheerio';
export const parse = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get('https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko'); // parsing new at google news
    const html = response.data;
    const $ = cheerio.load(html, { xmlMode: true });
    const titles = $('item > title').map((i, element) => $(element).text()).get();
    const links = $('item > link').map((i, element) => $(element).text()).get();
    let discordContent = '';
    let slackContent = '';
    for (let i = 0; i < 3; i++) {
        discordContent += `[${titles[i]}](${links[i]})\n`;
        slackContent += `<${links[i]}|${titles[i]}>\n`;
    }
    console.log('✅ 뉴스 파싱 완료');
    return {
        discordContent,
        slackContent,
    };
});
