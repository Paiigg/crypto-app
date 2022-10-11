import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketLeft from "./MarketLeft";
import Navbar from "./Navbar";
import Coin from "./Coin";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState();
  const [search, setSearch] = useState("");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

  useEffect(() => {
    const getCoin = async () => {
      const res = await axios.get(url);
      console.log(res);
      setCoins(res.data);
    };
    getCoin();
  }, [url]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar
        setSearch={setSearch}
        // searchMovie={getSearch}
        Change={handleChange}
        search={search}
      />
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-5 container mx-auto px-4 mt-5">
        <div className="md:w-[20%] py-10 md:py-0 overflow-x-hidden">
          <MarketLeft />
        </div>
        <div className="md:w-[80%] ">
          <Coin filter={filteredCoins} />
        </div>
      </div>
    </>
  );
};

export default Home;
