let Performer = require('mongoose').model("Performer");

module.exports = (req, res) => {
    // console.log(req.body);
save(req, res);
};

function save(req, res) {
   console.log(req.body);
    let userData = {
        username: req.body.data.username,
        password: req.body.data.password
    };

    console.log(req.body.data.username);

    var newUser = new Performer(userData);
    newUser.save(function(err) {
        if(err) {
            console.log(err);
            return res.send({status:false})
        }
        return res.send({status:true})
    })

}
