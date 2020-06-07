import axios from 'axios';

interface discordArgs {
  weather: {
    weather: string;
    temp: string;
  };
  news: string;
  date: string;

  url: string;
}

export default async({ weather, news, date, url }: discordArgs) => {
  const today = new Date().toLocaleDateString().replace(/\. /g, '-').replace('.', '');

  let message: any = {
    username: '알림봇',
    
    content:  `📨 ${today} 오늘이 시작됐어요!`,

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

  await axios.post(url, message);
};