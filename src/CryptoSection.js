import React, {Component} from "react";
import './CryptoSection.css';

// Crypto cards
const Coin = ({name, price, image, change, line}) => {
    let color; 
    change > 0 ? color ="#59af99" : color = "#ba0001";
    
    const min = Math.min(...line);
    const max = Math.max(...line);

    let normalised_prices = [];

    for (let i = 0; i < line.length; i++) {
    let new_price = (parseFloat(line[i]) - min) / (min - max);
    if (isNaN(new_price)) {
      new_price = 0;
    }
    normalised_prices.push(Math.abs((Math.abs(new_price * 100)) - 100));
    }
    
    let chartItems = normalised_prices.map((item, index) => {
    return [index, item];
    });
    
	return (
		<div className="section__crypto--card">
		    <div className="section__crypto--card-header">
		        <h2>{name}</h2>
		        <img className="section__crypto--card-image" src={image} alt={name} />
		    </div>
		    
		    <ul className="section__crypto--card-list">
		        <li>Price: {price}$</li>
		        <li style={{color: color}}>Change(24h): { Math.round(change*100)/100} %</li>
		        <li>Price Chart:</li>
		    </ul>
		    
		    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 169 100">
                
            <polygon points="0,0 100,0 100,100 0,100" />
            <polyline points={`${chartItems.map((p) => ' ' + p[0] + ',' + p[1])}`} style={{stroke: color}} />
                
            </svg>
		</div>
	);
};

// Crypto section 
class CryptoSection extends Component {
    constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  
    componentDidMount() {
        this.getCrypto();
        this.interval = setInterval(() => {
        this.getCrypto();
        }, 30000);    
    }

    getCrypto() {
        window.fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')
        .then((response) => response.json())
        .then(coinsList => {
        this.setState({ data: coinsList });
        });
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
  
    render() {    
        
        const filteredCoins = this.state.data.filter((coin, index) => {
           return index < 10; 
        });
          
        const coins = filteredCoins.map((coin, index) => (
            
        <Coin key={index} name={coin.name} price={coin.current_price} image={coin.image} change={coin.price_change_percentage_24h} line={coin.sparkline_in_7d.price} />
	)); 
	
        return (
            <section className="section__crypto u-margin-top-medium" id="crypto">
                <h1>Top Cryptocurrencies</h1>
                <div className="section__crypto--cards u-margin-top-medium">
                    {coins}
                </div>
            </section>
        );
    }
}

export default CryptoSection;