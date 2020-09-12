const express = require('express');
const app = express();

const indexRoute = require('./routes/index');


app.use('/', indexRoute);

//listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
