Module.register("appleMusic", {
    // Default module config.
	
    getDom: function() {
        var iframe = document.createElement("IFRAME");
        iframe.frameborder = 0;
        iframe.src =  "//tools.applemusic.com/embed/v1/playlist/pl.2b0e6e332fdf4b7a91164da3162127b5?country=us";
        return iframe;
    }
});
