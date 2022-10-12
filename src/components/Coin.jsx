import React from "react";

const Coin = ({ filter }) => {
  return (
    <div>
      <div className=" w-full bg-primary rounded-lg h-[80vh]  flex flex-col gap-5 p-5 md:overflow-x-hidden overflow-x-scroll no-scrollbar">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Market</h2>
        </div>

        <table className="border-separate border-spacing-3 text-left table-auto ">
          <thead>
            <tr>
              <th>Assets</th>
              <th></th>
              <th>Last price</th>
              <th>Market cap</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {filter.map((item) => (
              <tr className="mb-5 ">
                <td>
                  <img src={item.image} className="w-[50px] h-[50px]" alt="" />
                </td>
                <td className="uppercase text-white/30">{item.symbol}</td>
                <td className="text-white/30">USD {item.current_price}</td>
                <td className="text-white/30">
                  USD {item.market_cap_change_24h?.toLocaleString()}
                </td>
                {item.price_change_percentage_24h < 0 ? (
                  <td className="text-red-600">
                    {item.price_change_percentage_24h?.toFixed(2)} %
                  </td>
                ) : (
                  <td className="text-green-600">
                    {item.price_change_percentage_24h?.toFixed(2)} %
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coin;
