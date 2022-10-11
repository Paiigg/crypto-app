import React from "react";

const Search = ({ coin }) => {
  return coin ? (
    <section className="container mx-auto px-4 mt-10">
      <div className="bg-primary w-full rounded-lg p-4">
        <table className="border-separate border-spacing-5 text-left table-auto">
          {/* <thead>
              <tr>
              <th>Assets</th>
              <th>Name</th>
              <th>Last price</th>
              <th>Market cap</th>
              <th>Change</th>
              </tr>
            </thead> */}

          <tbody>
            {coin.map((item) => (
              <tr className="mb-5 ">
                <td>
                  <img src={item.image} className="w-[50px] h-[50px]" alt="" />
                </td>
                <td className="uppercase text-white/30">{item.symbol}</td>
                <td className="text-white/30">USD {item.current_price}</td>
                <td className="text-white/30">
                  USD {item.market_cap.toLocaleString()}
                </td>
                {item.price_change_percentage_24h < 0 ? (
                  <td className="text-red-600">
                    {item.price_change_percentage_24h} %
                  </td>
                ) : (
                  <td className="text-green-600">
                    {item.price_change_percentage_24h} %
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  ) : (
    "Data Not Found"
  );
};

export default Search;
