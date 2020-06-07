import * as core from '@actions/core';
import parser from './parser';
import discord from './lib/discord';

(async () => {
  const WEBHOOKS = process.env.WEBHOOKS;
  if (WEBHOOKS == null) throw new Error('웹훅 리스트를 찾을 수 없어요.');

  const webhookList = WEBHOOKS.split(',');

  const parsed = await parser();

  webhookList.map(async url => {
    if (url.includes('discordapp.com')) { // discord webhook
      await discord({
        weather: parsed.weather,
        news: parsed.news.discordContent,
        date: parsed.date,

        url,
      });
    }
  });

  console.log('✅ 웹훅 발송 완료');
})().catch(e => {
  console.error(e);
  core.setFailed(e);
});