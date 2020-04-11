import React, { useState/* , useMemo, useEffect */ } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import { actOrderItem } from '../../action/index'

function ControlSort(props) {
    let {order, actOrderItem} = props
    let {orderBy, orderDir} = order
    let mergeOrder = `${orderBy.toUpperCase()} - ${orderDir.toUpperCase()}`
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggle () {
        setDropdownOpen(!dropdownOpen)
    }
    function orderItem (orderBy, orderDir) {
        actOrderItem(orderBy, orderDir)
    }
    return (
        <div className="control-order mb-3">
           <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret block outline color="info">
                Sắp xếp theo: {mergeOrder}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => orderItem('name', 'asc')}>NAME - ASC</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => orderItem('name', 'desc')}>NAME - DESC</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => orderItem('level', 'asc')}>LEVEL - ASC</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => orderItem('level', 'desc')}>LEVEL - DESC</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        order: state.order
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        actOrderItem: (orderBy, orderDir) => {
            dispatch(actOrderItem(orderBy, orderDir))
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ControlSort)