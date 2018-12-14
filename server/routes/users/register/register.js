module.exports = (req,res) => {
console.log("req", req);
res.send(req.body);
};

function save(req, res) {
    let userData = {
        userName: req.body.user.userName,
        password: req.body.user.Password
    };

}
