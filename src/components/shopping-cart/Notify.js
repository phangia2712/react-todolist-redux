import React from 'react';
import { connect } from 'react-redux'

function Notify(props) {
    let { shopping_notify } = props;
    return (
    <div className="alert alert-success" role="alert" id="mnotification">{shopping_notify}</div>
    );

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        shopping_notify: state.shopping_notify
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notify)