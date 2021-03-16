import React, {Component} from 'react';
import './Crypto101.css'; 

class Crypto101 extends Component {
    constructor(props){
        super(props);
        this.state = {
            parts: [
                {   
                    id: 1,
                    name: "What Is bitcoin?",
                    isVisible: false,
                    fullArticle: "Bitcoin is a digital currency also known as a cryptocurrency or virtual currency, built on top of the blockchain technology. Yes, bitcoin is nothing that you can print, touch, feel, or store in your safe or wallet. Bitcoin is virtual. Technically, bitcoins are a bunch of numbers (0s and 1s) stored on a bunch of computers around the world. Bitcoin is built on a technology called the blockchain. Blockchain is the reason why Bitcoin is so popular. Blockchain is a technology to create, store, and manage digital transactions that are public, secure, and distributed."
                }, 
                {
                    id: 2,
                    name: "Why bitcoin?",
                    isVisible: false,
                    fullArticle: "Bitcoin was created in 2009 by an unknown individual or a group named “Satoshi Nakamoto” to provide a way to pay for transactions without a third-party like a bank. The transactions occur between two parties without any middlemen. There are no transaction fees and both parties are anonymous. When you buy bitcoins, you get a unique digital address that becomes your identity, and that address is used for every transaction. Some pundits predict that Bitcoin (and cryptocurrency) is the future of money. They say, eventually, the actual physical currency will start diminishing and digital currency will start appearing. Time will tell!"
                },
                {
                    id: 3,
                    name: "What can I do with bitcoins?",
                    isVisible: false,
                    fullArticle: "Today, many tech-savvy online retailers accept bitcoins. You can order services like Web hosting, buy merchandise, and even a coffee. Many online shopping carts that accept bitcoins will have an option similar to the following cryptocurrency icons: Bitcoin, LiteCoin, and Dogecoin. Here is an example of DirectNic offering cryptocurrency payment options. Some known businesses which accept bitcoins include Virgin Galactic, Overstock.com, TigerDirect, Dish Network, Expedia, Newegg, Directnic, Microsoft, Zynga, Starbucks, and Subway."
                },
                {
                    id: 4,
                    name: "Why do people buy bitcoins?",
                    isVisible: false,
                    fullArticle: "If I can buy everything using my credit card then why do I need bitcoins? Bitcoin is a new form of currency. Some people believe that the value of bitcoins will grow over time once more and more people and businesses start using them. People buy bitcoins as an investment vehicle. As a matter of fact, the value of 1 bitcoin has increased from $3,000 to $60,000 in the past 12 months. Some people are frustrated with current banks and financial institutions. They would rather pay via bitcoins. Bitcoins may also be used to stay anonymous when paying for services and products."
                },
                {
                    id: 5,
                    name: "Where do I buy bitcoins?",
                    isVisible: false,
                    fullArticle: "There are several cryptocurrency marketplaces (online websites or apps) called “cryptocurrency exchanges” that allow people to buy or sell bitcoins using different currencies. You can buy bitcoins using your local currency and start buying and selling bitcoins like any stock trade. When you open an account, you get a digital address and that address is your identity to buy, sell, or pay in bitcoins. Here is a list of some of the top cryptocurrency exchanges. Coinone, Bitthumb, Bitfinex, Quoine,Bittrex, HitBTC, Poloniex, Kraken, Coinbase, Bitstamp"
                },
                {
                    id: 6, 
                    name: "Where do I store bitcoins?", 
                    isVisible: false,
                    fullArticle: "Bitcoins are stored in your online accounts like your bank account, called a “digital wallet”. Digital wallets are stored in the cloud or on a server and are used to buy and sell bitcoins, and transfer bitcoins from one account (address) to other accounts as a form of a payment or transaction. Let’s say, you want to buy a sofa from Overstock valued at $6,000 and the current bitcoin price is $60,000. You will send 0.10 bitcoin to Overstock for the item. There is no bank or credit card involved in the transaction."
                },
                {
                    id: 7, 
                    name: "What is the risk in bitcoins?",
                    isVisible: false,
                    fullArticle: "Bitcoin is a virtual currency and has no tangible value that you can hide under the bed and use in difficult times. Bitcoins are not accepted everywhere. Bitcoin value fluctuates a lot. Even though the value of bitcoin is going higher, it doesn’t mean it will not go down. There may be a day when bitcoin could go down 30% in just a matter of hours. Some experts have even predicted that Bitcoin is a bubble. Bitcoins are stored in digital wallets and there have been many hacks into these wallets and bitcoins have been stolen. More and more hackers will target bitcoins as the value grows."
                },
                {
                    id: 8,
                    name: "What is bitcoin mining?",
                    isVisible: false,
                    fullArticle: "Bitcoin mining is the processing of transactions in the digital currency system, in which the records of current Bitcoin transactions, known as a blocks, are added to the record of past transactions, known as the block chain. A Bitcoin is defined by the digitally signed record of its transactions, starting with its creation. The block is an encrypted hash proof of work, created in a compute-intensive process. Miners use software that accesses their processing capacity to solve transaction-related algorithms. In return, they are awarded a certain number of Bitcoins per block. The block chain prevents attempts to spend a Bitcoin more than once -- otherwise the digital currency could be counterfeited by copy and paste. Originally, Bitcoin mining was conducted on the CPUs of individual computers, with more cores and greater speed resulting in more profitability. After that, the system became dominated by multi-graphics card systems, then field-programmable gate arrays and finally application-specific integrated circuits, in the attempt to find more hashes with less electrical power usage. Due to this constant escalation, it has become hard for prospective new miners to start. This adjustable difficulty is an intentional mechanism created to prevent inflation."
                },
                {
                    id: 9,
                    name: "What is blockchain?",
                    isVisible: false,
                    fullArticle: "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger. The decentralised database managed by multiple participants is known as Distributed Ledger Technology (DLT). Blockchain is a type of DLT in which transactions are recorded with an immutable cryptographic signature called a hash. This means if one block in one chain was changed, it would be immediately apparent it had been tampered with. If hackers wanted to corrupt a blockchain system, they would have to change every block in the chain, across all of the distributed versions of the chain. Blockchains such as Bitcoin and Ethereum are constantly and continually growing as blocks are being added to the chain, which significantly adds to the security of the ledger."
                },
                {
                    id: 10,
                    name: "What is altcoin?",
                    isVisible: false,
                    fullArticle: "The term 'Altcoin' is a combination of two words: 'alt' and 'coin' where alt means 'alternative' and coin means 'cryptocurrency'. Together they imply a category of cryptocurrency, which is an alternative to the digital Bitcoin currency. After Bitcoin's success story, many other peer-to-peer digital currencies have emerged to try to mimic that success.Many altcoins are built based on the basic structure provided by Bitcoin. Therefore, most altcoins are peer-to-peer, require a process of mining by which users solve difficult problems in cracking blocks and provide secure and inexpensive ways of carrying out web transactions. But Altcoins, even with many overlapping features, vary widely from one another."
                }
                ]
        };
        
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility(id) {
        return ev => {
            let newParts = this.state.parts.slice(0);
            console.log(newParts);
            let  properId = newParts.find(a => a.id === id);
            console.log(properId);
            properId.isVisible = !properId.isVisible;
            this.setState({parts:newParts});
        };
    }

    render() {
        
        let parts = this.state.parts.map((item, index) => (
                <div className="section__info--learning-box" key={index}>
                
                        <button className="section__info-button" onClick={this.toggleVisibility(item.id)}>{item.name}</button>
                    
                    <div className="section__info--learning-popup" style={item.isVisible ? {display: 'block'} : {display: 'none'}}>
                        <div className="section__info--learning-popup-content">
                            <a onClick={this.toggleVisibility(item.id)} className="popup-close" href="#info">&times;</a>
                            <h2 style={{textAlign: 'center', fontSize: '3rem', color: '#fff'}}>{item.name}</h2>
                            <p className="popup-text u-margin-top-small">{item.fullArticle}</p>
                        </div>
                        
                    </div>
                </div>
        ));
        
    return (
        <div className="section__info u-margin-top-medium" id="info">
            <h1>Crypto 101</h1>
            <div className="section__info--learning u-margin-top-medium">
                {parts}
            </div>
        </div>
        );
    }
}

export default Crypto101;