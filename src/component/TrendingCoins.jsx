import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
function TrendingCoins({ trendingCoins }) {
  return (
    <div className="trending-coins rounded bg-white row w-100">
      
      <span className="row" style={{padding:'10px', textAlign:"center",fontSize:'16px'}}><strong>Trending Coins (24h)</strong></span>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index}>
            <img src={coin.item.large} alt={coin.item.name} width="20px" />
            <span>{coin.item.symbol.toUpperCase()}</span>
            <div className="price-change">
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? (
                <span className="fw-bold text-success badge badge-success  d-inline-block">
                  
                <FontAwesomeIcon icon={faCaretUp} />
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </span>
              ) : (
                <span className="fw-bold text-danger badge badge-danger text-badge d-inline-block">
                <FontAwesomeIcon icon={faCaretDown} />
                  
                  
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = `
  .trending-coins {
    margin-bottom: 10px;
    
    margin:10px;
    border:1px solid  #ddd;
    padding:10px
   

    

  }

  

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    font-size: 16px;
    margin-bottom: 5px;
    color: #666;
    display: flex;
    flex-direction: row;
  }

  img {
    width: 20px;
    margin-right: 5px;
  }

  .price-change {
    margin-left: auto;
  }
  @media (max-width: 768px) {
    .trending-coins {
      font-size: 14px;
      
    }
    li {
      font-size: 14px;
    }
  }
`;
export default function StyledTrendingCoins({ trendingCoins }) {
  return (
    <>
      <style>{styles}</style>
      <TrendingCoins trendingCoins={trendingCoins} />
    </>
  );
}
