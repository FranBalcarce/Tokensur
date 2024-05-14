var request = require('request');

var options = { method: 'POST',
  url: 'https://www.Tokensur.com',
  headers:
   { 'Content-Type': 'application/json',
     'X-HMAC-SIGNATURE': '034c6da2bb31fd9e6892516c6d7b90ebe10f79b47cfb3d155d77b4d9b66e1d53',
     'X-AUTH-CLIENT': '4b8d72aa-d245-40cf-a3d2-5bcae1cc1163' },
  body:
   { image:
      { context: 'document-front',
        content: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+.../9fgAEAKcxisFjVfn0AAAAASUVORK5CYII=' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

