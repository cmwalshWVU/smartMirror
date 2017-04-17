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
	iframe.src =  "//tools.applemusic.com/embed/v1/playlist/pl.2b0e6e332fdf4b7a91164da3162127b5?country=us";
        return iframe;
    }
});
