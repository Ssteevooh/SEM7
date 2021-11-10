// all code here is for test logins only!

const testusers = [{username: "John", password: "Doe"},
{username: "Pekka", password: "Lehtola"},
{username: "Steve", password: "Hommy"},
{username: "Jarkko", password: "Heinonen"},
{username: ".", password: "."}];

exports.login = (req, res) => {
    var username = req.body.userName;
    var password = req.body.password;
    var validation = false;
    testusers.forEach(user => {
        if (user.username == username && user.password == password) {
            validation = true;
            return;
        }
    });
    res.send({validation: validation});
};