const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {

	// return {
	// 	shows: [],
	// 	episodes: []
	// };

	let url = "https://api.transistor.fm/v1";

	/* This returns a promise */
	return await Cache(url, {
		duration: "1h", // save for 1 day
		type: "json"    // we’ll parse JSON for you
	});
};
