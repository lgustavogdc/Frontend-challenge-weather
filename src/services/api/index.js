require('dotenv').config()
var OAuth = require('oauth');
const baseUrl= 'https://weather-ydn-yql.media.yahoo.com/forecastrss'

const header = {
    "X-Yahoo-App-Id":process.env.APP_YAHOO_ID 
};
const request = new OAuth.OAuth(
    null,
    null,
    process.env.APP_YAHOO_CLIENT_ID ,
    process.env.APP_YAHOO_CLIENT_SECRET,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

async function getWeatherData(params) {
return request.get(
    `${baseUrl}?${params}&format=json`,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    }
);}

export {
    getWeatherData
}