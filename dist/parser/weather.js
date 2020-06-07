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
import weatherData from './data/weather.json';
export const parse = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = process.env.WEATHER_API_KEY;
    const city = 'Samnye-eup';
    const response = yield axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`);
    const data = response.data;
    console.log('✅ 날씨 파싱 완료');
    return {
        weather: weatherData[data.weather[0].id],
        temp: `(${data.main.temp_min}도 ~ ${data.main.temp_max}도)`
    };
});
