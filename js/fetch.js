
let param = new URLSearchParams(window.location.search);
let userName1 = param.get('username');
let url = 'https://api.github.com/users/';
let request = url + userName1;





// let userName = '6thSence';
// 	userName = 'Chuvo'//for exampl
document.getElementById('search-user').addEventListener('click', function() {
	userName = document.getElementById('nickname-value').value;
	// log('userName for search = ' + userName);
	searchUser ();
})

function searchUser () {	
	let nameLink = document.getElementById('name-link');
	fetch(request)
		.then( function getResponse(response) {
			return response.json()
			//добавить обработку ошибки
		})

		.then( function getName(json) {			
			let name = json.name;		
			nameLink.innerHTML = name;
			log('nickName = ' + json.name);		
			return json 			
		})	

		.then(function getLink(json) {
			let url = json.html_url;
			nameLink.href= url;
			return json
		})

		.then( function getAvater(json) {
			log(json.avatar_url);
			let imgElem = document.getElementById('avatar-user'),
				avatarUrl = json.avatar_url;
			imgElem.style.backgroundImage =  `url(${avatarUrl}`;
			return json				
		})
.then( json => {
			log(json);
			document.getElementById('data').innerHTML=json;
			return json

		})		
		.then( function getBio(json) {
			let infoUser = json.bio;
			log('split= ' + json.bio);
			if (infoUser !=null) {
				infoUser.toString().split('\r\n\r\n').join(',<br>');
				let info = document.getElementById('info');
				info.innerHTML = infoUser;
				return json
			} else {
				info.innerHTML ='информации о пользователе нет';
				return	json
			}	
			return json
		})
			
}
	

