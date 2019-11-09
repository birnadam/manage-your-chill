import React, {Component} from 'react';
//component import
import Signin from "../../containers/Authentication/Signin";
import Signup from "../../containers/Authentication/Signup";

//import css
import s from "./index.css";



class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            signIn:true
        };

        this.switchToSignup = this.switchToSignup.bind(this);
    }

    switchToSignup(){
        if(this.state.signIn){
            this.setState({signIn:false});
        }
        else{
            this.setState({signIn:true});
        }
    }


    render() {
        return (
            <div className={s.page}>
                <div className={s.logoHeader}>
                    <img src={"https://perma.cool/wp-content/uploads/2019/03/site-icon-1.png"} alt={"Perma.Cool logo"} width={"500px"} />
                    <h1>Manage your chill</h1>
                </div>
                <div className={s.component}>
                    {this.state.signIn ? (
                        <Signin/>):
                        (<Signup/>)
                    }
                    <button onClick={this.switchToSignup}>{this.state.signIn ? ("signUp"):("SignIn")}</button>

                </div>
            </div>
        );
    }
}


export default Welcome;
