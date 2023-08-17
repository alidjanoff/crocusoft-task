import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((allData) => setData(allData));
  };
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default App;
