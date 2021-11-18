// all code here is for test logins only!

const testusers = [{username: "John", password: "Doe"},
{username: "Pekka", password: "Lehtola"},
{username: "Steve", password: "Hommy"},
{username: "Jarkko", password: "Heinonen"},
{username: ".", password: "."}];

exports.login = (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    let validation = false;
    testusers.forEach(user => {
        if (user.username == username && user.password == password) {
            validation = true;
            return;
        }
    });
    res.send({validation: validation});
};