import React, { useState } from 'react'
import { connect } from 'react-redux'

import helpers from '../../libs/helpers'
import * as configs from '../../constants/configs'
import validate from '../../libs/validate'
import {actDeleteProduct, actChangeNotify, actUpdateProduct} from '../../action/index'

// flow: chen action -> tao prop dispatch lien ket action, khai bao prop dispatch, nhan du lieu thong qua prop dispatch

function CartListItem(props) {

    let { index, item, propDeleteProduct, propChangeNotify, propUpdateItem } = props;
    const href = '#'
    let price = helpers.toCurrency(item.product.price, 'VND', 'left');
    const [inputForm, setInputForm] = useState({
        quantityProductCartItem: 0
    })


    // phai gan so luong thong qua 1 bien, chu neu gan truc tiep item.quantity len gia tri trong useState thi se ko work
    let quantity = (inputForm.quantityProductCartItem === 0) ? item.quantity : inputForm.quantityProductCartItem


    const handleChangeInputForm = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputForm(prev => ({ 
            ...prev,
            [name]: value
        }))
    }

    function showSubTotal(price, quantity) {
        let result = null;
        result = helpers.toCurrency(price * quantity, 'VND', 'left');
        return <strong>{result}</strong>
    }

    function deleteItem (itemID) {
        propDeleteProduct(itemID);
        propChangeNotify(configs.NOTI_ACT_DELETE);
    }

    function updateItem (item, quantity) {
        if(validate.checkQuantity(+quantity) === false) {
            propChangeNotify(configs.NOTI_IS_NUMBER_GREATER_THAN_EQUAL_ONE);
        } else{
            propUpdateItem(item, +quantity);
            propChangeNotify(configs.NOTI_ACT_UPDATE);
        }
    }

    return (
        <tr className="cart-list-item">
            <th scope="row">{index + 1}</th>
            <td>{item.product.title}</td>
            <td>{price}</td>
            <td><input name="quantityProductCartItem" type="number" value={quantity} min={1} onChange={handleChangeInputForm} /></td>
            <td>{showSubTotal(item.product.price, quantity)}</td>
            <td>
                <a className="btn btn-success update-cart-item" href={href} data-product="" onClick={(e) => { updateItem(item.product, quantity); e.preventDefault()} }>Update</a>
                <a className="btn btn-danger delete-cart-item" href={href} data-product="" onClick={(e) => {deleteItem(item.product.id); e.preventDefault()}}>Delete</a>
            </td>
        </tr>
    )
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
       
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        propDeleteProduct: (id) => {
            dispatch(actDeleteProduct(id));
        },
        propChangeNotify: (content) => {
            dispatch(actChangeNotify(content));
        },
        propUpdateItem: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartListItem)