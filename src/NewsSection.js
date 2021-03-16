import React, {Component} from 'react';
import './NewsSection.css';


const Article = ({title, preview, thumbnail, time, url, author, source}) => {
    
    if(author === "") {
        author = "Guest Author";
    }
    
    if(thumbnail === "") {
        thumbnail = "/images/bitcoin.jpg";
    }
    
    function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
    }
    
    let properUrl = addhttp(url);
    let properSource = addhttp(source);
    
    return (
            <div className="section__news--article">
                <figure className="section__news--article-shape">
                    <img className="section__news--article-img" src={thumbnail} alt="news-pic" />
                    <figcaption className="section__news--article-caption">{author}</figcaption>
                </figure>
                <div className="section__news--article-text">
                    <h2>{title}</h2>
                    <p>{preview}</p> 
                </div>
                <ul className="section__news--article-list">
                    <li>Source: <a href={properSource}>{source}</a></li>
                    <li>Posted: {time}</li>
                </ul>
                <a className="section__news--article-button" href={properUrl}>Read full article...</a>
            </div>
        );
};

              

class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    
    componentDidMount() {
        this.getNews();
        this.interval = setInterval(() => {
        this.getNews();
        }, 60000);
    }
    
    getNews() {
        window.fetch('https://api.tokendatabase.com/v1/news/posts?&key=Af5bvYww4hQMoKuwdXm-vLMMUONwLAYAb4wcXPaLLwBiBcq5DIqm7_lst2JP')
        .then(res => res.json())
        .then(data => {
            this.setState({news: data.results});
        });
    }
    
     componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        
        let news = this.state.news.map((item, index) => (
            <Article key={index} title={item.title} preview={item.preview} thumbnail={item.thumbnail} time={item.time} url={item.url} author={item.author.name} source={item.source.url} />
            ));
        
        return (
            <section className="section__news u-margin-top-medium" id="news">
                <h1>Latest News</h1>
                <div className="section__news--articles u-margin-top-medium">
                {news}
                </div>
            </section>  
        );
    }
}

export default NewsSection;