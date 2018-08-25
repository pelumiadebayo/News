import React, { Component } from 'react'


class AsyncApp extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
      category: ''
    }
  }

  componentDidMount() {
    this.getNews(this.state.category);
  }

  handleChange = (e) => {
    let category = e.target.value;
    this.getNews(category);
    this.setState({
      category
    }, () => {
      console.log(this.state.category);
    });
  }


  getNews = (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e009bc5f48c44bd89343a17eee4f539e`
    const req = new Request(url)
    fetch(req)
      .then(results => {
        return results.json()
      }).then(data => {
        let news = data.articles.map((news, i) => {
          return (
            <div key={i}>
              <h4>{news.title}</h4>
              <img className='image card-img-top' src={news.urlToImage} alt={`loading image from ${news.source.name}`} />
              <p className="card-text">{news.description}</p>
              <a href={news.url} className="btn btn-primary">{news.source.name}</a>
              <br />
            </div>
          )
        })
        this.setState({ news })
        console.log("state", this.state.news);
      })
  }

  render() {
    return (
      <div className="container">
        <select id="dropdown" onChange={this.handleChange} value={this.state.category}>
          <option value=''>category</option>
          <option value='technology'>Technology</option>
          <option value='business'>Business</option>
          <option value='politics'>Politics</option>
        </select>
        <div className="container">
          <div className="card cardName" >{this.state.news}</div>
        </div>
      </div>
    )
  }
}
export default AsyncApp;

