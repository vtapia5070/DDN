/*
Helper functions 
  DataHelpers - restructure data response from API endpoint
  CarouselHelpers - iterate through component propes to create jsx epressions
*/
var React = require('react');

module.exports = {
  dataHelpers: {
    getShows: function (data) {
      var shows = {};
      for (var i = 0; i < data.length; i++) {
        if (!(shows[data[i].show.data.slug])) {
          shows[data[i].show.data.slug] = Show(data[i].show.data.name)
        }
        var episode = Episode(data[i].name, data[i].summary, data[i].thumbnails.small.data.url, data[i].thumbnails.large.data.url);
        shows[data[i].show.data.slug].episodes.push(episode);
      }
      return shows;
    },
    getCarouselData: function (list) {
      var shows = [];
      for (var key in list) {
        shows.push({
          showName: list[key].name,
          episodeTitle: list[key].episodes[0].title,
          episodeDes: list[key].episodes[0].description,
          episodeCover: list[key].episodes[0].cover
        })
      }
      return shows;
    }
  },
  carouselHelpers: {
    createOrderedList: function createOrderedList (data) {
      var list = [];
      for(var i = 0; i < data.length; i++){
        if (i === 0) {
          list.push(<li key={i} data-target="#carousel-example-generic" data-slide-to={i} className="active"></li>);
        } else {
          list.push(<li key={i} data-target="#carousel-example-generic" data-slide-to={i}></li>);
        }
      }
      console.log("LIST:", list.length);
      return <ol className="carousel-indicators"> {list} </ol>
    },
    createSlides: function createSlideInner(data){
      var slides = []; 
      for(var i = 0; i < data.length; i++){
        if(i === 0){
          slides.push(
            <div className="item active" key={data[i].episodeTitle}>
               <img src={data[i].episodeCover} alt={data[i].showName} />
              <div className="carousel-caption">
                <h1>{data[i].showName}</h1>
                <h3>{data[i].episodeTitle}</h3>
                <p>{data[i].episodeDes}</p>
              </div>
            </div>
          )
        }else{
          slides.push(
            <div className="item" key={data[i].episodeTitle}>
            <img src={data[i].episodeCover} alt={data[i].showName} />
             <div className="carousel-caption">
              {data[i].episodeTitle}
             </div>
            </div>
          )
        }
      }
      return <div className="carousel-inner" role="listbox"> {slides} </div>
    }
  }
};

// constructor function to create show obj
function Show (name) {
  return {
    name: name,
    episodes: []
  };
}

// constructor function to create Episode obj
function Episode (title, description, thumbnail, cover) {
  return {
    title: title,
    description: description,
    thumbnail: thumbnail,
    cover: cover
  }
};
