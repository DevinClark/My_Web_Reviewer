var review = require('review')

review()
	.title('My Review')
	.sites({ Project : 'http://devin-clark.com/' })
	.resolutions([
		'1440x900',
		'1280x1024',
		'1024x768', 
		'320x480'
	])
	.wait(1000)
	.cut(true)
	.listen(4000)