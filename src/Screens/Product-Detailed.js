import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailed = () => {
  const [setting, statesetting] = useState([]);

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      statesetting(result.data);
    });
  }, []);

  const {id}=useParams();
  const handleIncrement = (productId) => {
    statesetting((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, rating: { ...product.rating, count: (product.rating?.count || 0) + 1 } }
          : product
      )
    );
  };
  
  const handleDecrement = (productId) => {
    statesetting((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, rating: { ...product.rating, count: (product.rating?.count || 0) - 1 } }
          : product
      )
    );
  };
  


  return (
    <>

      {setting.map((item) => {
        if (item.id===Number(id)) {
          
          return (
            <div >
              <center>
              <h1>{id}</h1>
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.title} width={200} height={200} />
              <p>Category: {item.category}</p>
              <p>{item.description}</p>
              <p>Price:${item.price}</p>

              <p>{item.rating.count}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
              </center>
            </div>
          );
        }
        
      })}
    </>
  );
};

export default ProductDetailed;