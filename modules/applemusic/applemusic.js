Module.register("applemusic", {
    // Default module config.
	defaults: {
		style: 'border:0;-webkit-filter: invert(100%);' +
    '-moz-filter: invert(100%);' + 
    '-o-filter: invert(100%);' + 
    '-ms-filter: invert(100%); }',
		},
    getDom: function() {
        var iframe = document.createElement("IFRAME");
        iframe.frameborder = 0;
        iframe.src =  "https://embed.spotify.com/?uri=spotify:album:4eLPsYPBmXABThSJ821sqY";
        return iframe;
    }
});
