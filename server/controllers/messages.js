let messages = [];

module.exports = {
    // get info about a single object - GET
    read:function(req, res){

    },
    // get a whole bunch of objects - GET
    list:function(req, res){
        res.send(messages);
    },

    // make a new object - POST
    create:function(req, res){
        messages.push(`${req.body.name} said ${req.body.message}`)
        res.send('Message Received');
    },

    // update an existing object - POST / PATCH
    update:function(req, res){

    },
    // delete an existing object - DELETE
    delete:function(req, res){

    },
}