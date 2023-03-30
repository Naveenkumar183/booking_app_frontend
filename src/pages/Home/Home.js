import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import Propertylist from '../../components/Propertylist'
import FeaturedProp from '../../components/FeaturedProp'
import MailList from '../../components/MailList'
import Footer from '../../components/Footer'

function home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
          <Featured/>
         
          <h1 className="hometitle">Browse by property type</h1>
          <Propertylist/>

          <h1 className="hometitle">Homes guest loves</h1>
          <FeaturedProp/>

          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default home