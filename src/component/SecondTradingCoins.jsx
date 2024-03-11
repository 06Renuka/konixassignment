import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function SecondTradingCoins({ trendingCoins }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 5);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 5);
  };

  return (
    <div style={{marginBottom:'100px'}}>
      <h4 style={{margin:'10px'}}>TrendingCoins</h4>

      <div style={{ display: "flex" }}>

        {currentIndex >= 0 && <button className="left" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>}

        {trendingCoins &&
          trendingCoins.slice(currentIndex, currentIndex + 5).map((coin, index) => (

            <div
              key={index}
              style={{ border: "1px solid #000", margin: "5px", width:'25%',height:'150px' }}
            >

              <div>
                <img
                  src={coin.item.large}
                  alt={coin.item.name}
                  style={{ height: "20px", width: "20px", borderRadius: "50%" }}
                />
                <span>{coin.item.symbol.toUpperCase()}</span>
                <div className={coin.item.data.price_change_percentage_24h.usd >= 0 ? 'price-change positive' : 'price-change negative'}>
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </div>
              </div>
              <div>{coin.item.data.price}</div>
              <img
                src={coin.item.data.sparkline}
                alt="Price graph"
                style={{
                  height: "100px",
                  width: "100%",
                  margin:'2px',
                  padding:'2px',
                  border: "",
                  
                }}
              />
            </div>
          ))}
        {currentIndex + 5 < trendingCoins.length && (
          <button className="right" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
        )}
      </div>
    </div>
  );
}

const styles = `
  .price-change {
    margin-left: auto;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
  .right{
    border-radius: 50%;
     width: 1px;
     height: 58px;
      alignContent: center;
       margin-top: 50px;
        background-color: white;
        border:1px;
        margin-left:-6px;
       
        
  }
  .left{
    border-radius: 50%;
     width: 1px;
     height: 58px;
      alignContent: center;
       margin-top: 50px;
        background-color: white;
        border:1px;
        
        margin-right:10px;
        
  }
`;

export default function StyledTrendingCoins({ trendingCoins }) {
  return (
    <>
      <style>{styles}</style>
      <SecondTradingCoins trendingCoins={trendingCoins} />
    </>
  );
}
