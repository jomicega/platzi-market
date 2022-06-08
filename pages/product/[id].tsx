import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

//Cuando la pagina es dinámica
export const getStaticPaths = async () => {
  const url = 'https://platzi-avo.vercel.app/api/avo'

  const response = await fetch(url)
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const url = `https://platzi-avo.vercel.app/api/avo/${id}`
  const response = await fetch(url)

  const product: TProduct = await response.json()
  return {
    props: { product },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
