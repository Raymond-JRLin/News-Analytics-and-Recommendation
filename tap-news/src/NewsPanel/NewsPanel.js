import './NewsPanel.css';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {news:null};
  }

  componentDidMount() {
    this.loadMoreNews();
  }

  loadMoreNews(e) {
    this.setState({
      news: [
        { 'url': 'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
          'title': "Inside Andrew Puzder's failed nomination",
          'description': "In the end, Andrew Puzder had too much baggage",
          'source': "cnn",
          'urlToImage': 'http:i2.cdn.cnn.com/cnnnext/dam/assets/1702151625-4-',
          'digest':"3RjuEomJo2601syZbU7OHA==\n",
          'reason': "Recommand"
        }, {
          'url': 'http://techcrunch.com/2017/03/23/zero-motorcycles-cto-abe-askenazi-on-the-future-of/index.html',
          'title': "Zero Motorcycles CTO Abe Askenazi on the future of two-wheeled EVs",
          'description': "In the end, Andrew Puzder had too much baggage",
          'source': "techcrunch",
          'urlToImage': 'http:i2.cdn.cnn.com/cnnnext/dam/assets/1702151625-4-',
          'digest':"3RjuEomJo2601syZbU7OHA==\n",
          'time': "Today",
          'reason': "Hot"
        }
      ]
    })
  }

  renderNews() {
    var news_list = this.state.news.map(function (news) {
      return (
        <a className='list-group-item' key={news.digest} href="#">
          <NewsCard news={news} />
        </a>
      );
    });

    return(
      <div className="container-fluid">
        <div className="list-group">
          {news_list}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.news) {
      return(
        <div>
          {this.renderNews()}
        </div>
      );
    } else {
      return(
        <div>
          <div id='msg-app-loading'>
            Loading
          </div>
        </div>
      );
    }
  }
}
