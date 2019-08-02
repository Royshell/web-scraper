import request from 'request';
import cheerio from 'cheerio';

 


request({uri: /*enter URL*/},
  (_error, response, body) => {

    const $ = cheerio.load(body);
    const textFromDom = $(/*enter query selector*/).text();
    //console.log(textFromDom); - checkif text fetched
  }


)