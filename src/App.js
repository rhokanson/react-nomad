import { useState, useEffect } from "react"

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(()=>{
    console.log("call the api")
  }, [])
  useEffect(()=>{
    if (keyword !== "") {
      console.log("search for", keyword);
    }
  }, [keyword])
  useEffect(()=>{
      console.log("counter change");
  }, [counter])
  return (
      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
        <h1>{counter}</h1>
        <button onClick={onClick}>click</button>
      </div>
  );
}

export default App;
