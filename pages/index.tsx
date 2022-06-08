import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

// export const getServerSideProps = async () => {
//   const url = 'https://platzi-avo.vercel.app/api/avo'
//   const response = await fetch(url)

//   const { data: productList }: TAPIAvoResponse = await response.json()
//   return {
//     props: { productList },
//   }
// }

//Cuando la pagina es estática
export const getStaticProps = async () => {
  const url = 'https://platzi-avo.vercel.app/api/avo'
  const response = await fetch(url)

  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: { productList },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
