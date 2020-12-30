import React from 'react'
import './Home.css';
import Product from'./Product';

function Home() {
    return (
        <div className="home">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazonhome" />
       
       <div className="home__row">
       <Product 
       id={128323} 
       title="New Apple iphone 12 Pro (128GB)-Graphite Colour"
       price={119900}
       rating={5}
        image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg"
        />


        <Product 
        id={128323} 
        title="New Apple iphone 12 (128GB)-Blue Colour"
        price={119000}
        rating={4}
         image="https://api.themrphone.com/imgprocess/?url=https://api.themrphone.com/mrphone/images/8873/2.jpg&h=275"
         />
       </div>

      
      

       <div className="home__row">
       <Product 
       id={128323} 
       title="Apple iPhone 11 (64GB) - (Product) RED"
       price={51900}
       rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71hh7cpWadL._SL1500_.jpg"
        />


        <Product 
        id={128323} 
        title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
        price={29900}
        rating={3}
         image="https://i.gadgets360cdn.com/products/large/oneplus-nord-379x800-1595392253.jpg"
         />

         <Product 
         id={128323} 
         title="New Apple iPhone 11 (128GB) - Green"
         price={58900}
         rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71w3oJ7aWyL._SL1500_.jpg"
          />
       </div>



       <div className="home__row">
       <Product 
       id={128323} 
       title="New Apple iphone 12 (128GB)-Graphite Colour"
       price={119900}
       rating={5}
        image="https://www.apple.com/v/iphone-12-pro/b/images/meta/iphone-12-pro_specs__f12v7vvx042m_og.png"
        />
       </div>


        </div>
    )
}

export default Home
