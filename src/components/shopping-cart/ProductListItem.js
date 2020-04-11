import React, { useState } from 'react'
import { connect } from 'react-redux'

import helpers from '../../libs/helpers'
import validate from '../../libs/validate'
import { actBuyProduct, actChangeNotify } from '../../action/index'
import * as configs from '../../constants/configs'
// import { BUY_PRODUCT } from '../../constants/actionTypes'

function ProductListItem (props) {
    let { item, propBuyProduct, propChangeNotify } = props
    const href = '#'
    const [inputForm, setInputForm] = useState({
        quantityProduct: 1
    })

    const handleChangeInputForm = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function showPrice () {
        let price = helpers.toCurrency(item.price, 'VND', 'left');
        let ele = <div>
                    <input name="quantityProduct" type="number" value={inputForm.quantityProduct} min="1" onChange={handleChangeInputForm} />
                    <a onClick={(e) => {buyProduct(item); e.preventDefault()} } href={href} className="price"> { price } </a>
                </div>
        if (item.closeStatus) {
            ele = <div>
                    {/* <input disabled name="quantityProduct" type="number" value={inputForm.quantityProduct} min="1" onChange={handleChangeInputForm} /> */}
                    <span className="price">{ price }</span>
                </div>
        }
        return ele
    }

    function buyProduct(item) {
        let quantity = +inputForm.quantityProduct;
        if(validate.checkQuantity(quantity) === false){
            propChangeNotify(configs.NOTI_IS_NUMBER_GREATER_THAN_EQUAL_ONE);
        } else{
            propBuyProduct(item, quantity);
            propChangeNotify(configs.NOTI_ACT_ADD);
        }
        
        
    }

    return (
        <div className="media product">
            <div className="media-left">
                <a href={href}>
                    <img className="media-object" src={require(`../../images/${item.imgLink}`)} alt="charmander" />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{item.title}</h4>
                <p>{item.content}</p>
                {showPrice()}
            </div>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
       
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        propBuyProduct: (product, quantity) => {
            dispatch(actBuyProduct(product, quantity));
        },
        propChangeNotify: (content) => {
            dispatch(actChangeNotify(content));
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductListItem)