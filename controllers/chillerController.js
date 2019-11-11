const sql           = require("../controllers/mysql2ORMController");
const logger        = require('../logs/Wlogger');

module.exports = {
    //requires a "serial" string in the req.headers
    addChiller: async (req,res) => {
        try {
            let con = await sql.GetConnection();
            let user = await sql.selectWhere(con,"users","id",req.user[0].id);
            if(user.length==0){
                res.status(404).json({ error: 'User not found' });
            }
            const InsertObj = {
                location:req.headers.location,
                ownerID:req.user[0].id,
                serial:req.headers.serial
            };
            let chiller = await sql.insertNewChiller(con,InsertObj);
            con.end();
            console.log(chiller);
            logger.log({
                level:"info",
                message:`Added Chiller for user: ${req.headers.id}|| serial ${req.headers.serial}||`
            });
            res.status(200).json(chiller);
        } catch(e) {
            console.log("ERROR");
            // console.log(e);
            logger.log({
                level:"error",
                message:`ERROR adding Chiller for user: ${req.headers.id}|| serial ${req.headers.serial}||`
            });
            res.json(e);
        }
    },

    getChillersForUser: async (req,res) => {
        try {
            let con = await sql.GetConnection();
            let user = await sql.selectWhere(con,"users","id",req.user[0].id);
            if(user.length==0){
                res.status(404).json({ error: 'User not found' });
            }
            let chiller = await sql.selectWhere(con,"chillers","ownerID",req.user[0].id);
            logger.log({
                level:"info",
                message:`got chiller list for id: ${req.header}`
            })
            con.end();
            res.status(200).json(chiller);
        } catch(e) {
            console.log("ERROR");
            // console.log(e);
            res.json(e);
        }
    },

    getCurrentTempAndStatus: async (req,res) => {
        try{
            let con = await sql.GetConnection();
            // console.log(Object.keys(req.headers));
            let chillerID = parseInt(req.headers['chillerid']);
            console.log(chillerID);
            let response = await sql.selectChillerDataForIDInDesc(con, chillerID, "timestamp");
            console.log(response);
            con.end();
            res.status(200).json(response);
        }catch(e){
            console.log(e);
            logger.log({
                level:"error",
                message:e
            });
            res.status(500).json(`error with database`)
        }
    }



}
