import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import { Spinner } from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: this.props.pageSize,
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=461769ef0d234acfbd3e5f4ce6c87dc4&pageSize=${this.props.pageSize}&category=${this.props.category}`,
    };
  }
  promisedSetState = (newState) =>
    new Promise((resolve) => this.setState(newState, resolve));

  async updateNews() {
    const url = `${this.state.url}&page=${this.state.page}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    await this.promisedSetState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.state.pageSize)
      )
    ) {
      await this.promisedSetState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  render() {
    let defaultImgUrl =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "20px" }}>
          News Panda - Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgUrl={
                      element.urlToImage ? element.urlToImage : defaultImgUrl
                    }
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      // disabled={this.state.page<=1}
      // disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.state.pageSize)}
    );
  }
}

export default News;
