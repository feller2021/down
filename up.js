var superagent = require('superagent');


// user add

var url = "http://api.vc.bilibili.com/api/v1/drawImage/upload"

let s = await superagent.post(url)

	.type("form")

	.send({

		file_up: '5',

		category: 'cos'

		

	})
let url = s.body
console.log(url)
	.end((err, res) => {

		if(err) {

			console.log("出错：" + err);

		} else {

			console.log(res.text);

		}

	});