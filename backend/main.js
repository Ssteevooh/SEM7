const express = require('express'), app = express(), port = 5000,
    browseRouter = require('./routes/browseRoutes'),
    postRouter = require('./routes/postRoutes'),
    loginRouter = require('./routes/loginRoutes');

app.use('/browse', browseRouter.router);
app.use('/post', postRouter.router);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});