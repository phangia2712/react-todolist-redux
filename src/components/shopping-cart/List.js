import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

function List (props) {
    let { products } = props

    function showItems () {
        let ele = <p>Không có dữ liệu</p>
        if (products.length > 0) {
            ele = products.map((item, index) => {
                return <ListItem key={index} item={item} />
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
						{/* <div className="media product">
                            <div className="media-left">
                                <a href={href}>
                                    <img className="media-object" src={images('./aplus-media.jpg')} alt="charmander" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">aplus media</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                                <span className="price"> 12 USD</span>
                            </div>
                        </div>
                   
						<div className="media product">
                            <div className="media-left">
                                <a href={href}>
                                    <img className="media-object" src={images('./robo_fig_combo.jpg')} alt="charmander" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">robo fig combo</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                                <input name="quantityProduct2" type="number" value={inputForm.quantityProduct2} min="1" onChange={handleChangeInputForm} />
    							<a data-product="1" href={href} className="price"> 12 USD </a>
                            </div>
                        </div>
                     
						<div className="media product">
                            <div className="media-left">
                                <a href={href}>
                                    <img className="media-object" src={images('./target-leap-frog.jpg')} alt="target-leap-frog" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">target leap frog</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                                <input name="quantityProduct3" type="number" value={inputForm.quantityProduct3} min="1" onChange={handleChangeInputForm} />
    							<a data-product="1" href={href} className="price"> 12 USD </a>
                            </div>
                        </div> */}
                  
                    </div>
				</div>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
       products: state.products
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