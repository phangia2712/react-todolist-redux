import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './ProductListItem'
import * as configs from '../../constants/configs'

function ProductList (props) {
    let { shopping_products } = props

    function showItems () {
        let ele = <p>{configs.NOTI_EMPTY_PRODUCT}</p>
        if (shopping_products.length > 0) {
            ele = shopping_products.map((item, index) => {
                return <ProductListItem key={index} item={item} />
            })
        }
        return ele
    }

    return (
        <div className="list">
            <div className="panel panel-primary"> 
					<div className="panel-heading"><h2 className="panel-title">List Products</h2></div> 
					<div className="panel-body" id="list-product">
                        {showItems()}
                    </div>
				</div>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        shopping_products: state.shopping_products
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
       
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList)