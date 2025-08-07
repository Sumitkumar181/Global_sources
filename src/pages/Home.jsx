import React from 'react'
import Banner from '../component/Home/Banner'
import TopNav from '../component/Home/TopNav'
import Hotproducts from '../component/Home/Hotproducts'
import Choices from '../component/Home/Choices'
import NewProducts from '../component/Home/NewProducts'
import ReadyToOrder from '../component/Home/ReadyToOrder'
import RecommendedSuppliers from '../component/Home/RecommendedSuppliers'
import RequestForQuotations from '../component/Home/RequestForQuotations'
import SourceByRegion from '../component/Home/SourceByRegion'
import FeaturedCategories from '../component/Home/FeaturedCategories'
import SourcingServices from '../component/Home/SourcingServices'





const Home = () => {
  return (
    <>
      {/* <TopNav /> */}
      <div className="bg-gray-100 min-h-screen">
        <Banner />
      </div>
      <Hotproducts/>
      <Choices />
      <NewProducts />
      <ReadyToOrder />
      <RecommendedSuppliers />
      <RequestForQuotations />
      <SourceByRegion />
      <FeaturedCategories />
      <SourcingServices/>
      
    </>
    
  )
}

export default Home
