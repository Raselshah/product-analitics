const { useState, useEffect } = require("react");

const LoadProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("FoodData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default LoadProducts;
