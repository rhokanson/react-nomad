import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(['Bitcoin', '(BTC):', '34673.00017053603', 'USD']);
  const onChange = (event) => {
    setCoin(event.target.value.split(" "));
  }
  const [usd, setUsd] = useState("0");
  const onUSD = (event) => {
    setUsd(event.target.value)
  }

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then(response => response.json())
    .then((json)=> {
      setCoins(json);
      setLoading(false);
    })
  }, [])
  return (
    <div>
     <h1>The  Coins!</h1>
     {loading ? <strong>Loading...</strong> : <select onChange={onChange}>
       {coins.map((coin) => 
       <option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
     </select>}
     <hr/>
     <label htmlFor="coin">USD</label>
     <input id="coin"
     type="number" 
     value={usd}
     onChange={onUSD}
     /> 
     <h2>{coin[1]} {usd / coin[2]}</h2>

    </div>

    );
}

export default App;
