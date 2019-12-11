const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content  h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "Fegues da meia noite",
     artist: "Criolo",
     cover: "criolo-web.jpg",
     file: "freguesdameianoite.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;