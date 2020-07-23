const request = require('request');
console.log();
request.get('https://datazen.katren.ru/calendar/day/', 
function(data, err, body)  {
  console.log(JSON.parse(body));
    if (err){
        console.log(err);
    } else {
        console.log(body.body);
    }
}
);