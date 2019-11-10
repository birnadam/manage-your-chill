const sql   = require('../controllers/mysql2ORMController');
const fs    = require('fs');
const moment = require("moment");

class VirtualChiller{
    constructor(){
        this.chillerStartingState = {
            temp1:-40,
            temp2:-85,
            temp3:-62,
            tempA:72,
            humidity:13
        };
        this.currentState = {
            temp1:-40,
            temp2:-85,
            temp3:-62,
            tempA:72,
            humidity:13,
            time:0
        };
        this.chillerHistory = [];
        this.state = {
            running:false,
            event:"none",
            startTimestamp:0,
            intervalID:{},
            time:100
        };
        this.generateChillerDatapoint     = this.generateChillerDatapoint.bind(this);
        this.pushNewData                  = this.pushNewData.bind(this);
        this.upOrDown                     = this.upOrDown.bind(this);
    }
    startChiller(){
        console.log("starting chiller");
        this.state.startTimestamp = moment().unix();
        this.currentState.time = this.state.startTimestamp;
        for(let i = 120; i>0;i--){
            this.pushNewData()
        }
        // console.log(this.chillerHistory);
    };

    pushNewData(){
        let cstate = this.currentState;
        let newData = this.generateChillerDatapoint(cstate);
        if(this.chillerHistory.length>120){
            this.chillerHistory.shift();
        }
        this.chillerHistory.push(newData);
        this.currentState = newData;
        console.log(newData);
    }


    generateChillerDatapoint(currentState) {
        let newState = {};
        newState.temp1 = this.upOrDown(this.chillerStartingState.temp1,currentState.temp1,8) ? (currentState.temp1+Math.random()):(currentState.temp1-Math.random());
        newState.temp2 = this.upOrDown(this.chillerStartingState.temp2,currentState.temp2,5) ? (currentState.temp2+Math.random()):(currentState.temp2-Math.random());
        newState.temp3 = this.upOrDown(this.chillerStartingState.temp3,currentState.temp3,8) ? (currentState.temp3+Math.random()):(currentState.temp3-Math.random());
        newState.tempA = this.upOrDown(this.chillerStartingState.tempA,currentState.tempA,20) ? (currentState.tempA+Math.random()):(currentState.tempA-Math.random());
        newState.humidity = this.upOrDown(this.chillerStartingState.humidity,currentState.humidity,2) ? (currentState.humidity+Math.random()):(currentState.humidity-Math.random());
        newState.time = currentState.time+120;
        return newState;
    }
    //decided if the temp goes up or down based on the current temp and the starting temp and variability.
    //return true for positive number addition to temp and false for negative number
    upOrDown(startingTemp, currentTemp, variability){
        console.log(`stemp: ${startingTemp} || ctemp: ${currentTemp}|| var: ${variability} diff: ${startingTemp-currentTemp}`);
        // if the current is a positive number
        if(currentTemp > 0){
            // console.log("isPositive");
            //starting is 70 current is 60 diff 10
            //and the difference is a positive number meaning its less than it should be
            if(startingTemp-currentTemp>0){
                if(startingTemp-currentTemp>=variability){
                    //increase the number to keep it within the variability
                    // console.log("up");
                    return true;
                }
            }//starting is 70 current is 82 diff -12
                //is a negative difference
            else{
                if(startingTemp-currentTemp*-1>=variability){
                    // console.log("down");
                    return false;
                }
            }
        }// if the current temp is a negative number
        else if (currentTemp<0){
            //stemp: -40 || ctemp: -29.51||  diff: -10.48
            //stemp: -40 || ctemp: -15.71 diff: -24.28
            // console.log("is negative");
            //starting is -40 current is -55 diff 15
            //diff is positive number
            if(startingTemp-currentTemp >0){
                // console.log("diff is positive");
                if(startingTemp-currentTemp>=variability){
                    //increase the number to keep it within the variability
                    // console.log("up");
                    return true;
                }
            }
            else{
                // console.log("diff is negative");
                // console.log((startingTemp-currentTemp)*(-1) >=variability);

                //starting is -40 current is -32 diff -8
                if((startingTemp-currentTemp)*(-1) >=variability){
                    //increase the number to keep it within the variability
                    // console.log("down");
                    return false;
                }
            }
        }
        //if there is no difference or to generate a random move
        console.log("generating random move");
        if(Math.random()>0.5){
            return true;
        }
        else{
            return false;
        }
    }

}

const VC = new VirtualChiller();
let cState = VC.currentState;
VC.startChiller();

fs.writeFile("chillerdatatest.json", JSON.stringify(VC.chillerHistory), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
