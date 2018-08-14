var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render(this.videos);
  },


  render: function() {
    this.$el.html(this.template());
    var allVideos = new VideoListView({collection: this.videos});
    allVideos.render();

    new VideoPlayerView({
      //grabs the first item in the collection .at(0)
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
