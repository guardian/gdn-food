
if(jQuery.support.cors) {
	jQuery('.ma-placeholder-recipe-box').load('http://gdn-food.appspot.com/components/recipes/more/8', function() { jQuery('.ma-placeholder-recipe-box').removeClass('initially-off'); });
}