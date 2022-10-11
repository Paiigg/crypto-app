import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const MarketLeft = () => {
  const [left, setLeft] = useState([]);
  const url = `https://api.coingecko.com/api/v3/search/trending`;
  useEffect(() => {
    const getLeft = async () => {
      const res = await axios.get(url);
      console.log(res.data.coins[0].item);
      setLeft(res.data.coins);
    };
    getLeft();
  }, [url]);

  return (
    <section>
      <div className="overflow-x-hidden h-[80vh] no-scrollbar">
        <div>
          <p className="text-white/30">In the past 24h</p>
          <h2 className="text-2xl font-semibold">Market is up</h2>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          {left.map((item) => (
            <div className="bg-primary w-full rounded-lg p-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src={item.item.thumb} className="w-30px h-[30px]" alt="" />
                <p>{item.item.name}</p>
              </div>
              <p>Market Cap Ranking:</p>
              <p className="text-yellow-400"># {item.item.market_cap_rank}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketLeft;
