/*
These helper methods iterate through carousel properties and create a 
list of expressions used in the carousel component
*/
var React = require('react');

module.exports = {
  createOrderedList: function createOrderedList (data) {
    var list = [];
    for(var i = 0; i < data.length; i++){
      if (i === 0) {
        list.push(<li key={i} data-target="#carousel-example-generic" data-slide-to={i} className="active"></li>);
      } else {
        list.push(<li key={i} data-target="#carousel-example-generic" data-slide-to={i}></li>);
      }
    }
    return <ol className="carousel-indicators"> {list} </ol>
  },
  createSlides: function createSlideInner(data){
    var Styles = {
      caption: {
        backgroundColor: "rgba(0,0,0,0.6)"
      },
      cover: {
        minWidth: "100%"
      },
      slide: {
        maxHeight: "75vh!important",
        height: "100%!important"
      }
    }
    var slides = []; 
    for(var i = 0; i < data.length; i++){
      if(i === 0){
        slides.push(
          <div style={Styles.slide} className="item active" key={data[i].episodeTitle}>
            <img style={Styles.cover} src={data[i].episodeCover} alt={data[i].showName}/>
            <div style={Styles.caption} className="carousel-caption">
              <h1>{data[i].showName}</h1>
              <h3>{data[i].episodeTitle}</h3>
              <h5>{data[i].episodeDes}</h5>
            </div>
          </div>
        )
      }else{
        slides.push(
          <div style={Styles.slide} className="item" key={data[i].episodeTitle}>
            <img style={Styles.cover} src={data[i].episodeCover} alt={data[i].showName} />
            <div style={Styles.caption} className="carousel-caption">
              <h1>{data[i].showName}</h1>
              <h3>{data[i].episodeTitle}</h3>
              <h5>{data[i].episodeDes}</h5>
            </div>
          </div>
        )
      }
    }
    return <div className="carousel-inner" role="listbox"> {slides} </div>
  }
};