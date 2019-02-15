fetch('https://api.github.com/users/6thSence')
	.then(getUrl => window.location)
	.then(result=> console.log(result.toString()))