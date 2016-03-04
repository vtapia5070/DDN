/*
Helper functions to restructure data response from API endpoint
*/

module.exports = {
  // iterate data, create shows obj with episodes array
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
  // get cover image, title and description of one episode per show
  getCrouselData: function (list) {
    var shows = [];
    for (var show in list) {
      shows.push({
        showName: list.name,
        episodeTitle: list.episodes[0].title,
        episodeDes: list.episodes[0].description,
        episodeCover: list.episodes[0].cover
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
