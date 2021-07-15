import axios from 'axios';
//import { useState } from 'react';
import Graph from './Graph';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Currency = () => {
  const { id } = useParams();
  const [arr, setArr] = useState([{}])
  const [label, setLabel] = useState([]);
  let array = [];
  let array2 = [];
  let array3 = [];
  //let array2 = [];

  const formatDate = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = `0${date.getMonth()+1}`.slice(-2);
    //console.log(month)
    const day = `0${date.getDate()}`.slice(-2);

    return `${day}-${month}-${year}`
}


  for(let i = 0 ;i<7;i++)
  {
    const d = new Date();
    const x = formatDate(d.setDate(d.getDate() - (6-i)));

    array[i] = (x);
  }

  for(let i = 0 ;i<14;i++)
  {
    const d = new Date();
    const x = formatDate(d.setDate(d.getDate() - (13-i)));

    array2[i] = (x);
  }

  for(let i = 0 ;i<28;i++)
  {
    const d = new Date();
    const x = formatDate(d.setDate(d.getDate() - (27-i)));

    array3[i] = (x);
  }

  // useEffect(() => {
    
  //   axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`)
  //   .then(res => {
  //     //console.log(res.data.prices);
  //     setArr(res.data.prices)
  //     //array2[i] = (res.data.market_data.current_price.usd.toFixed(2));
  //   })
  //   .catch(error =>
  //     console.log(error)
  //     )
  // }, [id])

  const getReport = () => {

    setLabel(array);
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`)
    .then(res => {
      console.log(res.data);
      setArr(res.data.prices)
      //array2[i] = (res.data.market_data.current_price.usd.toFixed(2));
    })
    .catch(error =>
      console.log(error)
      )
  }

  const getReport2 = () => {

    setLabel(array2);

    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=13&interval=daily`)
    .then(res => {
      //console.log(res.data.prices);
      setArr(res.data.prices)
      //array2[i] = (res.data.market_data.current_price.usd.toFixed(2));
    })
    .catch(error =>
      console.log(error)
      )
  }

  const getReport3 = () => {

    setLabel(array3);

    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=27&interval=daily`)
    .then(res => {
      //console.log(res.data.prices);
      setArr(res.data.prices)
      //array2[i] = (res.data.market_data.current_price.usd.toFixed(2));
    })
    .catch(error =>
      console.log(error)
      )
  }




  return ( 
    <div>
      <Graph
      xaxis = {label} 
      yaxis = {arr}
      label = {'Prices'}
      />
      <div>
        <button className = "button" onClick={getReport}>7 Days</button>
        <button className = "button" onClick={getReport2}>14 Days</button>
        <button className = "button" onClick={getReport3}>28 Days</button>
      </div>
    </div>
   );
}
 
export default Currency;