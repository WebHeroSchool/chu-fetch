const getDataButton = document.querySelector('.get-data-button');

getDataButton.addEventListener('click', getData);

function getData() {
    const searchParams = new URLSearchParams(window.location.search),
        userName = searchParams.get('username'),
        request = `https://api.github.com/users/${userName}`;
        dataContainer = document.querySelector(".data-container"),
        dataWrapper = document.querySelector(".data-wrapper");
        
        
    fetch(request)
        .then(response => {
            if (response.status !==200) {
                dataContainer.innerHTML = 'Такого пользователя не существует';
            } else {
                return response.json(); 
            }                      
        })
        .catch(err => {
            dataContainer.innerHTML = "что-то пошло не так";
            console.log(err);
        })
        .then(json => {
            const userName = json.name,
                  printName = document.createElement('a');

            printName.innerHTML = `Имя пользователя: ${userName}`; 
            printName.classList.add('print-name'); 
            printName.classList.add('render');
            document.querySelector(".data-wrapper").appendChild(printName).href = json.html_url;                

            console.log(`Имя пользователя: ${json.name}`);
            return json;
        })
        .then(json => {
            const printAvatar = document.createElement('img');
                

            dataContainer.insertBefore(printAvatar, dataWrapper).src = json.avatar_url;
            printAvatar.classList.add("avatar");
            console.log(json);
            return json;
        })
        
        .then(json => {
            const getBio = json.bio,
                  printBio = document.createElement('div');

            printBio.classList.add('render');
            printBio.innerHTML = `
                <p class = "print-bio">${getBio}</p>
            `;
            document.querySelector(".data-wrapper").appendChild(printBio);
        })
        
  
}