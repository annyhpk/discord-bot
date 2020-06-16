var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as core from '@actions/core';
import parser from './parser';
import discord from './lib/discord';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const WEBHOOKS = process.env.WEBHOOKS;
    if (WEBHOOKS == null)
        throw new Error('웹훅 리스트를 찾을 수 없어요.');
    const webhookList = WEBHOOKS.split(',');
    const parsed = yield parser();
    webhookList.map((url) => __awaiter(void 0, void 0, void 0, function* () {
        if (url.includes('discordapp.com')) { // discord webhook
            yield discord({
                weather: parsed.weather,
                news: parsed.news.discordContent,
                date: parsed.date,
                url,
            });
        }
    }));
    console.log('✅ 웹훅 발송 완료');
}))().catch(e => {
    console.error(e);
    core.setFailed(e);
});
