import React/* , { useState, useMemo, useEffect } */ from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { actToggleForm, actResetIsSelected } from '../../action/index'

function ToggleForm(props) {
    let {isShowForm, actToggleForm} = props
    function toggleForm (e) {
        actToggleForm()
        e.preventDefault()
    }
    function showButton (isShowForm) {
        let btnLabel = 'Thêm công việc', btnClass = 'primary', outlineMe = false
        if (isShowForm) {
            btnLabel = 'Đóng Form'
            btnClass = 'secondary'
            outlineMe = true
        }
        let ele = <Button outline={outlineMe} color={`${btnClass}`} block onClick={toggleForm}>{btnLabel}</Button>
        return ele
    }
    return (
        <div className="toggle-form mb-3">
            {showButton(isShowForm)}
            {/* <Button color="primary" block onClick={toggleForm}>Thêm công việc</Button> */}
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isShowForm: state.isShowForm
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        actToggleForm: () => {
            dispatch(actToggleForm())
            dispatch(actResetIsSelected())
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToggleForm)