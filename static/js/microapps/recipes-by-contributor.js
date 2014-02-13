
if(jQuery.support.cors) {
	jQuery('.ma-placeholder-contributor-recipe-box').load('http://gdn-food.appspot.com/components/recipes/more-by-author/8?path=' + window.location.pathname, function() { jQuery('.ma-placeholder-contributor-recipe-box').removeClass('initially-off'); });
}