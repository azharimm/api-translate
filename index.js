const express = require("express");
const app = express();

const indexRoute = require("./routes/index");

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://translate.azharimm.tk');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

//routes
app.use("/", indexRoute);

//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
