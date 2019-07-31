import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncSingleProduct} from '../store/singleProduct'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getAsyncSingleProduct(id)
  }
  render() {
    return (
      <div>
        <img src={this.props.singleProduct.imageUrl} style={{width: '50%'}} />
        <h3>
          {this.props.singleProduct.brand} {this.props.singleProduct.modelName}
        </h3>
        <h4>Length: {this.props.singleProduct.length}</h4>
        <h4>Price: {this.props.singleProduct.price}</h4>
        <h5>Description:</h5>
        <h5>{this.props.singleProduct.description}</h5>
        <button type="button" id={this.props.singleProduct.id}>
          Add to Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAsyncSingleProduct: id => dispatch(getAsyncSingleProduct(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
