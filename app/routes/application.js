import Ember from 'ember';

export default Ember.Route.extend({
	Model: function () {
		SC.initialize({
		  client_id: 'ed10419c544fca8a3db988fe6d04c020'
		});
		      
		// permalink to a track
		var track_url = 'https://soundcloud.com/user494758591/matt-and-kim-its-alright';
		      
		SC.get('/resolve', { url: track_url }, function(track) {
		SC.get('/tracks/' + track.id + '/comments', function(comments) {
		  for (var i = 0; i < comments.length; i++) {
		    console.log('Someone said: ' + comments[i].body);
		   }
		  });
		});
	}
});