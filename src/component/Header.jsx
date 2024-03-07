import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import bitcoinImage from "../Assests/bitcoin-btc-logo.png"; // Im
import TradingViewWidget from "./TradingViewWidget";
function Header({
  btcPrice,
  btcChange,
  btcPriceInr,
  coinName,
  BitcoinMarketCapRank,
}) {
  const [bitcoinImageSrc, setBitcoinImageSrc] = useState(bitcoinImage);
  const handleClick = () => {
    setBitcoinImageSrc("bitcoinImage"); // Reset the image source
  };

  const colorStyle = {
    color: btcChange >= 0 ? "green" : "red",
  };

  return (
    <div
      className="rounded"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",
      }}
    >
      <div className="header">
        <div className=" d-flex flex-row mb-1 ">
          <img
            src={bitcoinImageSrc}
            alt={coinName}
            style={{
              padding: "5px",
              width: "60px",
              margin: "5px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          <span
            className=""
            style={{ padding: "10px", textAlign: "center", fontSize: "30px" }}
          >
            <strong>{coinName}</strong>
          </span>

          <button
            style={{
              border: "1px",
              backgroundColor: "grey",
              color: "white",
              margin: "15px",
              borderRadius: "4px",
              padding: "10px 10px",
            }}
          >
            Rank#{BitcoinMarketCapRank}
          </button>
        </div>

        <div className="bitcoin-info w-50%  d-flex flex-row bd-highlight m-2">
          <h3 className="p-2 bd-highlight">${btcPrice}</h3>
          
          <div className=" p-2 bd-highlight">
            {btcChange >= 0 ? (
              <span className="fw-bold text-success badge badge-success  d-inline-block">
                <FontAwesomeIcon icon={faCaretUp} />
                {btcChange}%
              </span>
            ) : (
              <span className="fw-bold text-danger badge badge-danger text-badge d-inline-block">
                <FontAwesomeIcon icon={faCaretDown} />
                {btcChange}%
              </span>
            )}
          </div>
          <p className="p-2 bd-highlight">(24H)</p>
        </div>

        <div className="d-flex flex-row bd-highlight m-2">
          <h4>₹{btcPriceInr}</h4>
        </div>
      </div>
      <div style={{ height: "400px", margin:'10px' }}>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Header;
