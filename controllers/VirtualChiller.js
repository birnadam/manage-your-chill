const sql = require('../controllers/mysql2ORMController');

class VirtualChiller{
    constructor(){
        this.chillerStartingState = {
            temp1:-40,
            temp2:-85,
            temp3:-62,
            tempA:72,
            humidity:13
        };
        this.chillerHistory = [];
        this.state = {
            running:false,
            event:no
        };
    }
    startChiller = async function(){

    };
    generateChillerDatapoint = function (cState) {
        let newState = {};
        newState.temp1 = this.upOrDown() ? (chState.temp1+Math.random()):(chState.temp1-Math.random());

        return {
            temp1:Math.floor(40+(Math.random()*5))*-1,
            temp2:Math.floor(80+(Math.random()*5))*-1,
            temp3:Math.floor(60+(Math.random()*5))*-1,
            tempA:Math.floor(70+(Math.random()*20)),
        }
    }
    //decided if the temp goes up or down based on the current temp and the starting temp and variability.
    //return true for positive number addition to temp and false for negative number
    upOrDown = function(startingTemp, currentTemp, variability){
        // if the differnece between the starting and current is a positive number
        if(startingTemp-currentTemp > 0){
            //starting is 70 current is 62 diff 8
            if(startingTemp-currentTemp>=variability){
                //number should drop in value
                return false;
            }//starting is 70 current is 82 diff -12
            if(startingTemp-currentTemp<0 && startingTemp-currentTemp*-1>= variability){
                return false
            }
        }// if the difference is a negative number
        else if (startingTemp-currentTemp<0){
            //starting is -40 current is -32 diff -8
            //starting is -40 current is -55 diff
            if(startingTemp-currentTemp*-1 >= variability){
                //step up to a higher number
                return true;
            }
        }
        //if there is no difference or to generate a random move
        if(Math.random()>0.5){
            return true;
        }
        else{
            return false;
        }
    }

}
