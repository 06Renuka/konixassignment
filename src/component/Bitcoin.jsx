import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//import TradingViewWidget from './TradingViewWidget';
import Header from "./Header";
import TrendingCoins from "./TrendingCoins";
import YouMayAlsoLike from "./YouMayAlsoLike";
import SecondTradingCoins from "./SecondTradingCoins";
import Team from "./Team";
//import Setiment from "./Setiment";
import Teknomics from "./Teknomics";
//import NavBar from "./component/NavBar";
//import axios from 'axios'
function Bitcoin() {
  const [coinName, setCoinName] = useState(" ");
  const [btcPrice, setBtcPrice] = useState("");
  const [btcChange, setBtcChange] = useState("");
  const [btcPriceInr, setBtcChangeInr] = useState("");
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [youMayAlsoLikeCoins, setYouMayAlsoLikeCoins] = useState([]);
  const [coinImage, setBitcoinImage] = useState("");
  const [BitcoinMarketCapRank, setBitcoinMarketCapRank]=useState('');
  

  useEffect(() => {
    // Fetch Bitcoin price and 24h change from Coingecko API
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setBtcPrice(data.bitcoin.usd);
        setCoinName("Bitcoin");
        setBitcoinImage('')

        console.log(setBtcChange(data.bitcoin.usd));
        setBtcChangeInr(data.bitcoin.inr);
        setBtcChange(data.bitcoin.usd_24h_change.toFixed(2));
        if (data.bitcoin.name) {
          setCoinName(data.bitcoin.name);
        }
      });


    // Fetch trending coins from Coingecko API
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        setTrendingCoins(data.coins.slice(0, 3));
        setYouMayAlsoLikeCoins(data.coins);
        // setCoinImage(data.coins[0].item.small);
        //setCoinImage(data[0].item.small);
        const bitcoin = data.coins.find((coin) => coin.item.id === "bitcoin");
        if (bitcoin) {
          setBitcoinImage(bitcoin.item.small);
          setBitcoinMarketCapRank(bitcoin.item.market_cap_rank)
          console.log(setBitcoinMarketCapRank(bitcoin.item.market_cap_rank))
        }

        // If Bitcoin data is found, extract the market cap rank and image URL
        
          //const coinName = data.coins && data.coins.length > 0 ? data.coins[0].item.name : "";
          //
          //// Set Bitcoin name dynamically
          //setCoinName(coinName.charAt(0).toUpperCase() + coinName.slice(1));
  });
  }, []);

  return (
    <div>
    <p>Cryptocurrencies >><strong>Bitcoin</strong> </p>
    
    <Container >
    
      <Row>
      <Col xs={12} md={9} >
          
          <div className="" >
          <Header
            btcPrice={btcPrice}
            btcChange={btcChange}
            btcPriceInr={btcPriceInr}
            coinName={coinName}
            coinImage={coinImage}
            BitcoinMarketCapRank={BitcoinMarketCapRank}
          />
          <div>
          <Team />
          

          </div>
          
          <div>
          <Teknomics/>

          </div>
          
          
        </div>
        </Col>
        <Col xs={12} md={3}>
         
          <div className="h-400" >
          <TrendingCoins trendingCoins={trendingCoins} />
        </div>
        </Col>
       
        
      </Row>

    
    </Container>
    <Row className="bg-white">
    <div className="sidebar">
        <YouMayAlsoLike trendingCoins={youMayAlsoLikeCoins} />
      </div>
      <div>
        <SecondTradingCoins trendingCoins={youMayAlsoLikeCoins} />
      </div>
    </Row>
    </div>
  );
}
export default Bitcoin;

