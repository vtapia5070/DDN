/*
These helper methods iterate through the API Enpoint response and filter useful data
used by the carousel, shows, and grid component components 
*/

module.exports = {
  getShows: function (data) {
    var shows = {};
    for (var i = 0; i < data.length; i++) {
      if (!(shows[data[i].show.data.slug])) {
        shows[data[i].show.data.slug] = Show(data[i].show.data.name)
      }
      var episode = Episode(data[i].name, data[i].summary, data[i].thumbnails.medium.data.url, data[i].thumbnails.large.data.url);
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

