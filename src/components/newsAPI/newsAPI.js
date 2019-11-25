
import React , {Component}from 'react';

class NewsAPI extends Component{
constructor(props){
  super(props);
  this.state= {
    articles: []
  }
}

fetchData(){
  var url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ec1e7bc3658049b9b448396681f16680';
  var req = new Request(url);
  fetch(req)
  .then((response) =>{
    return response.json();
  })
  .then((myJson) =>{
    //console.log(myJson);
    
    this.setState({
      articles: myJson.articles.slice(0,3)
    })
  
  });

}

componentDidMount(){

  setInterval(() =>{
    this.fetchData()
  }, 5000);

 
}

    render(){
      console.log(this.state);
      return(
          <div className="newsAPI">     
            <div><h2>News Feed:</h2></div> 
            {this.state.articles.map((item,index)=>{
              return(
                <h2>
                  {item.title}
                </h2>
              )
            }
            )}
            <p className="dateStamp"><a href="https://newsapi.org">powered by News API</a></p>
          </div>
        )
    }
  }

export default NewsAPI;