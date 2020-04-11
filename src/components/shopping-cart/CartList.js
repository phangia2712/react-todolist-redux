import React from 'react';
import CartListItem from './CartListItem'
import Notify from './Notify'
import { connect } from 'react-redux'

import helpers from '../../libs/helpers'
import { sumBy } from 'lodash'

function CartList(props) {
    let { shopping_cart_list } = props;
    function showItems () {
        let ele = <tr><th colSpan="6">Empty product in your cart</th></tr>
        if (shopping_cart_list.length > 0) {
            ele = shopping_cart_list.map((item, index) => {
                return <CartListItem key={index + "-" + item.quantity} index={index} item={item} />
            })
        }
        return ele
    }
    function showFooter () {
      // let totalProduct = 0, price = null;
      // if (shopping_cart_list.length > 0) {
      //   for (let item of shopping_cart_list) {
      //     totalProduct += item.quantity;
      //   }
      //   price = 4
      // }
      // Cach tu lam, con duoi day la dung lodash de tinh sum
      let totalQuantity = sumBy(shopping_cart_list, 'quantity');
      let totalPrice = sumBy(shopping_cart_list, function(o) { return o.product.price * o.quantity; });



      // ele de len tren vi tri cua if thi no se không cap nhat dc gia tri thay doi
      // cua totalProduct và price
      // vi the phải đặt ele cuối cùng rồi mới return
      // suy ra thu tu chay truoc chay sau rât quan trọng nha mấy thím
      let ele = <tr>
                  <td colSpan="4">There are <b>{totalQuantity}</b> items in your shopping cart.</td>
                  <td colSpan="2" className="total-price text-left">{helpers.toCurrency(totalPrice, 'VND', 'left')}</td>
                </tr>
      return ele
  }
    return (
        <div className="cart-list">
            <div className="panel panel-danger"> 
            <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
            <div className="panel-body">
            
                      <table className="table">
                <thead>
                  <tr>
                    <th width="4%">#</th>
                    <th>Product Name</th>
                    <th width="15%">Price</th>
                    <th width="4%">Quantity</th>
                    <th width="20%">Subtotal</th>
                    <th width="25%">Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                    {showItems()}
                </tbody>
                <tfoot id="my-cart-footer">
                    {showFooter()}
                </tfoot>
              </table>
            </div>
          </div>
          <Notify />
        </div>
    );

}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    shopping_cart_list: state.shopping_cart_list
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)