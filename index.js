const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.json({
		message: 'Hello World!'
	});
});

//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

// const translate = require("google-baidu-translate-api");

// translate
// 	.google(
// 		"US Secretary of State Mike Pompeo called the meeting 'historic' as he flew to Doha for the opening ceremony.",
// 		"id"
// 	)
// 	.then((res) => {
// 		console.log(res);
// 	});
