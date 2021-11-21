//const { request } = require('http');

const express = require('express'), app = express(), port = 5000,
    auctionRouter = require('./routes/auctionRoutes'),
    dropdownRouter = require('./routes/dropdownRoutes'),
    loginRouter = require('./routes/loginRoutes');

app.use(express.json());

app.use('/auctions', auctionRouter.router);
app.use('/dropdown', dropdownRouter.router);
app.use("/login", loginRouter.Router);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});