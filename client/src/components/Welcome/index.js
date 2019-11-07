import React from 'react';

//component import
import Signin from "../../containers/Authentication/Signin";
import Signup from "../../containers/Authentication/Signup";

//import css
import s from "./index.less";

const Welcome = () => {
  return (
    <div className={s.page}>
        <div className={s.logoHeader}>
            <img src={"https://perma.cool/wp-content/uploads/2019/03/site-icon-1.png"} alt={"Perma.Cool logo"} />
            <h1>Manage your chill</h1>
        </div>
        <div className={s.component}>

        </div>
    </div>
  );
};

export default Welcome;
