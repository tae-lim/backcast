var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function (query) {
    this.fetch({
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
