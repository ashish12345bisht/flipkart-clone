import React,{useState,useEffect} from 'react'
import Categories from '../components/Categories'
import Offers from '../components/Offers';
import ProductCarousel from '../components/ProductCarousel';
import StaticImages from '../components/StaticImages';
import {Data2} from '../data/products'

function Homepage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.table(data);
  let data2=Data2.slice(0,Data2.length/2);
  let data3 = Data2.slice(Data2.length / 2, Data2.length);
  console.log(data2);
  return (
    <div>
      <Categories />
      <Offers />
      <ProductCarousel data={data} />
      <StaticImages
        img={
          "https://rukminim2.flixcart.com/flap/480/480/image/d73744cb5f0cb736.jpg?q=50"
        }
      />
      {data.length != 0 && <ProductCarousel />}
      <StaticImages
        img={
          "https://rukminim2.flixcart.com/flap/480/480/image/a9fd4c05bf19818b.jpg?q=50"
        }
      />
      <StaticImages
        img={
          "https://rukminim2.flixcart.com/flap/480/480/image/3ff56affa66f8331.jpeg?q=50"
        }
      />
      <ProductCarousel data={data2} />
      <ProductCarousel data={data3} />
    </div>
  );
}

export default Homepage