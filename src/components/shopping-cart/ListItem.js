import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actChangeQuantityProduct } from '../../action/index'

function ListItem (props) {
    let { item, propsChangeQuantityProduct } = props
    const href = '#'
    const [inputForm, setInputForm] = useState({
        quantityProduct: 2
    })

    const handleChangeInputForm = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputForm(prev => ({ 
            ...prev,
            [name]: value
        }))
        console.log('inputForm.quantityProduct', Number(inputForm.quantityProduct))
        propsChangeQuantityProduct(item, Number(inputForm.quantityProduct))
    }

    function showPrice () {
        let ele = <div>
                    <input name="quantityProduct" type="number" value={inputForm.quantityProduct} min="1" onChange={handleChangeInputForm} />
                    <a data-product="1" href={href} className="price"> {item.price} USD </a>
                </div>
        if (item.closeStatus) {
            ele = <div>
                    <input disabled name="quantityProduct" type="number" value={inputForm.quantityProduct} min="1" onChange={handleChangeInputForm} />
                    <span className="price"> {item.price} USD</span>
                </div>
        }
        return ele
    }

    return (
        <div className="media product">
                            <div className="media-left">
                                <a href={href}>
                                    <img className="media-object" src={item.imgLink} alt="charmander" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{item.title}</h4>
                                <p>{item.content}</p>
                                <input name="quantityProduct" type="number" value={inputForm.quantityProduct} min="1" onChange={handleChangeInputForm} />
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
        propsChangeQuantityProduct: (item, newQuantity) => {
            dispatch(actChangeQuantityProduct(item, newQuantity))
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem)