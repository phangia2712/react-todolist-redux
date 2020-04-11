import React/* , { useState, useMemo, useEffect } */ from 'react'
import lodash from 'lodash'
import { Table } from 'reactstrap';
import ListItem from './ListItem'
import { connect } from 'react-redux'
// import { actToggleForm } from '../../action/index'

function List(props) {
    let {items, strSearch, order} = props

    // SEARCH
    let itemsOrigin = [...items] || []
    if (strSearch.length > 0) {
        items = lodash.filter(itemsOrigin, function(o) { return lodash.includes(o.name.toLowerCase(), strSearch.toLowerCase())})
    } else {
        items = itemsOrigin
    }
    // ORDER (cung co ham sortBy nua nhung ko dung)
    items = lodash.orderBy(items, [order.orderBy], [order.orderDir]);



    function showItems () {
        let ele = <tr><td colSpan={5} align="center">Không có dữ liệu</td></tr>
        if (items.length > 0) {
            ele = items.map((item, index) => {
                return <ListItem key={index} item={item} index={index} />
            })
        }
        return ele
    }
    return (
        <div className="list mt-3">
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Tên công việc</th>
                    <th>Độ ưu tiên</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
                </thead>
                <tbody>
                    {showItems()}
                </tbody>
            </Table>
           
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      items: state.items,
      strSearch: state.strSearch,
      order: state.order
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {

    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)