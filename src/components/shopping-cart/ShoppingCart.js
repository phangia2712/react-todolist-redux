import React from 'react'
import '../../scss/styles.scss'
import ProductList from './ProductList'
import Title from './Title'
import CartList from './CartList'

function ShoppingCart(props) {

    return (
        <div className="shopping-cart">
            <div className="container-fluid">
				<Title />
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<ProductList />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<CartList />
					</div>
				</div>
			</div>
        </div>
    )
}

export default ShoppingCart;
