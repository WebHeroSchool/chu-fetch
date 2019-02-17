let log = console.log; 
// let user = prompt('enter a username for search');
let userName = '6thSence';//for exampl
document.getElementById('search-user').addEventListener('click', function() {
	// userName = document.getElementById('nickname-value').value;
	log('user name' + userName);
	searchUser (userName);
})

function searchUser () {	
	let nameLink = document.getElementById('name-link');
	fetch(`https://api.github.com/users/${userName}`)
		.then( result => result.json())
		.then( function getName(json) {
			let name = json.name;
			nameLink.innerHTML = name;
			log(json.name);		
			return json
		})	
		.then( function getAvater(json) {
			log(json.avatar_url);
			let imgElem = document.getElementById('avatar-user');
			let avatarUrl = json.avatar_url;
			imgElem.style.backgroundImage =  `url(${avatarUrl}`;
			return json				
		})
		.then( function getBio(json) {
			let infoUser = json.bio.toString().split('\r\n\r\n').join(',<br>');
			log('split= '+json.bio);
			let info = document.getElementById('info');
			info.innerHTML=infoUser;
			return json
		})	
		.then(function getLink(json) {
			let url = json.html_url;
			nameLink.href= url
		})	
}
	

