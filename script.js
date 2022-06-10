const button = document.querySelector('.button');
const jokeText = document.querySelector('.joke-text')
document.addEventListener('DOMContentLoaded', pushMe)

button.addEventListener('click', pushMe);

async function pushMe(){
    const jokeStorage = await fetch('https://icanhazdadjoke.com', {
    headers: {
        'Accept': 'application/json'
    }
});
const jokeObj = await jokeStorage.json();
jokeText.innerHTML = jokeObj.joke;
} 