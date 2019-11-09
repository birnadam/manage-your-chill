const sql = require('../controllers/mysql2ORMController');

class VirtualChiller{
    constructor(){
        this.chillerState = {
            temp1:-40,
            temp2:-85,
            temp3:-62,
            tempA:72,
            humidity:13
        }
        this.state = {
            running:false,
            event:no
        }
    }
    startChiller = async function(){

    }
    generateChillerDatapoint =

}
