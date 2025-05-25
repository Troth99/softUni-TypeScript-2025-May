type httpCodes = { code: 200 | 201 | 301; text: string };
type printCode = { code: 400 | 404 | 500; text: string; printChars?: number };

function httpCode(httpCodes: httpCodes | printCode) {
  switch(httpCodes.code){
    case 200:
    case 201:
    case 301 : console.log(httpCodes.text); return;
    case 400:
    case 404:
    case 500: console.log(httpCodes.text.split('').splice(0, httpCodes.printChars).join(''))
  }
}

httpCode({ code: 404, text: 'Not Found', printChars: 3})
