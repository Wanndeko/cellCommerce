import { useState, useEffect } from 'react'

import api from '../../services/api'
import CardProducts from '../CardProducts'
import { MainContainer } from './style'

function Products() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function getProducts() {
      const {
        data: { results }
      } = await api.get('celular')
      setProducts(results)
    }

    getProducts()
  }, [])

  console.log(products)

  return (
    <MainContainer>
      {products &&
        products.map((product) => (
          <CardProducts key={product.id} data={product} />
        ))}
    </MainContainer>
  )
}

export default Products
