//const { request } = require('http');

const express = require('express'), app = express(), port = 5000,
    browseRouter = require('./routes/browseRoutes'),
    postRouter = require('./routes/postRoutes'),
    dropdownRouter = require('./routes/dropdownRoutes'),
    loginRouter = require('./routes/loginRoutes');

app.use(express.json());

app.use('/browse', browseRouter.router);
app.use('/post', postRouter.router);
app.use('/dropdown', dropdownRouter.router);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});