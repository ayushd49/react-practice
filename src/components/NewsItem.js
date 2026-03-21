import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, desc, imgUrl, url, author, date, source} = this.props
    return (
      <div>
        <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="title">{title} ...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'100%', zIndex:"1"}}>{source['name']}<span className="visually-hidden"></span></span></h5>
          <p className="card-text">{desc} ...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
          <a href={url} rel='noreferrer' target='_blank' className="btn btn-dark">Go somewhere</a>
        </div>
      </div>
      </div>
    )
  }
}

// export default news
