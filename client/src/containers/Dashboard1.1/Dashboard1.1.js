import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addChiller, fetchUserChillersAndStatus} from "../../actions";
import {reduxForm} from "redux-form";
import requireAuth from "../../hoc/requireAuth";

class Dashboard11 extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}


function mapStateToProps({ state }) {
    return { state};
}

const formedComponent = compose(
    connect(mapStateToProps, { addChiller: addChiller, fetchChillers: fetchUserChillersAndStatus }),
    reduxForm({ form: 'Add todo'})
)(Dashboard11);

export default requireAuth(formedComponent);
