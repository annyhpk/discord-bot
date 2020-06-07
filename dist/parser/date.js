import dateData from './data/date.json';
export var parser = function () {
    var date = new Date();
    var today = date.getMonth() + 1 + "-" + date.getDate();
    console.log('✅ 날짜 파싱 완료');
    return dateData[today] || null;
};
