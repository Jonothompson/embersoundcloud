import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    SC.initialize({
      client_id: "ed10419c544fca8a3db988fe6d04c020"
    });
    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get('/tracks/35112511', function(song) {
          resolve(song);
      });
    });
  }
});