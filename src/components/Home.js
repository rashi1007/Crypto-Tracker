import Table from './Table';
import Header from './Header'

const Home = (props) => {
    const rep = props.link;
    return ( 
        <div>
          <h1>Today's Cryptocurrency Prices</h1>
        <Header />
        {
            rep.map(id => {
              return (
                <Table
                key = {id.market_cap_rank}
                id = {id.id}
                image = {id.image}
                name = {id.name}
                symbol = {id.symbol}
                price = {id.current_price}
                perc = {id.price_change_percentage_24h}
                market = {id.market_cap}
                volume = {id.total_volume}
                />
              )
            })
          }
          </div>
     );
}
 
export default Home;