import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncProducts} from '../store/products'
import EachProduct from './EachProduct'
import {Link} from 'react-router-dom'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleDetail = this.toggleDetail.bind(this)
  }
  componentDidMount() {
    this.props.getAsyncProducts()
  }
  toggleDetail(event) {
    let id = +event.target.id
    this.props.history.push(`/products/${id}`)
  }
  render() {
    return (
      <div>
        <h1>All Products</h1>
        {this.props.products.map &&
          this.props.products.map(product => {
            return (
              <div key={product.id}>
                <EachProduct
                  product={product}
                  toggleDetail={this.toggleDetail}
                />
              </div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAsyncProducts: () => dispatch(getAsyncProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
