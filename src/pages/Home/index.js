import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  // class component
  // async componentDidMount() {
  //   const response = await api.get('products');

  //   const data = response.data.map(product => ({
  //     ...product,
  //     priceFormatted: formatPrice(product.price),
  //   }));

  //   this.setState({ products: data });
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    // const { addToCartRequest } = this.props;

    dispatch(CartActions.addToCartRequest(id));
  }

  // const { products } = this.state;
  // const { amount } = this.props;

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="lightgray" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>Add ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
