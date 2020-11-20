window.onload = function () {
    loadName(listName);
    // hideAll();
    showChoose();
}

let readySection = document.getElementById("ready"); 
// CHOOSE SECTION
let chooseSection = document.getElementById("choose"); 
let idFirstName = document.getElementById("firstName");
let idSecondName = document.getElementById("secondName");
let idFirstButton = document.getElementById("firstButton");
let idSecondButton = document.getElementById("secondButton");
let firstImage = document.getElementById("firstImage"); 
let secondImage = document.getElementById("secondImage"); 

// RESULT SECTION
let resultSection = document.getElementById("result"); 
let favoriteName = document.getElementById("favoriteName");
let favoriteImage = document.getElementById("favoriteImage");
let listDrama = document.getElementById("listDramaName");

let firstName = {}
let secondName = {}
let winner = {}
let listName = []
// let pilihan
listName = [
    {
        name : 'Sweet Home (2020)',
        foto : 'https://asianwiki.com/images/1/1d/Sweet_Home-Netflix-SM01.jpg'
    },
    {
        name : 'Team Bulldog: Off-Duty Investigation',
        foto : 'https://asianwiki.com/images/4/41/Team_Bulldog-SM1.jpg'
    },
    {
        name : 'Backstreet Rockie',
        foto : 'https://asianwiki.com/images/7/76/Backstreet_Rookie-mp1.jpg'
    },
    {
        name : 'The World of the Married',
        foto : 'https://asianwiki.com/images/2/23/The_World_of_the_Married-tmp1.jpg'
    },
    {
        name : 'Hospital Playlist',
        foto : 'https://asianwiki.com/images/c/ca/Hospital_Playlist-P1.jpg'
    }
]
let dramaList = []
for (let i = 0; i < listName.length; i++) {
    const data = listName[i];
    dramaList.push(data)
}
idFirstButton.onclick = function () {
    choose(dramaList,secondName)
}
idSecondButton.onclick = function () {
    choose(dramaList,firstName)
}
// ------------------------------------------------------ //

function showList(arr) {
    let nameList = ''
    for (let i = 0; i < arr.length; i++) {
        const data = arr[i];
        console.log(data);
        nameList += "<li>"+ data.name +"</li>"
    }
    listDrama.innerHTML = nameList
}

// ------------------------------------------------------ //

function showReady(params) {
    eadySection.style.display = 'none'
    resultSection.style.display = 'none'
    chooseSection.style.display = 'none'
}
function showChoose(params) {
    readySection.style.display = 'none'
    resultSection.style.display = 'none'
    chooseSection.style.display = 'block'
}

function showResult(params) {
    readySection.style.display = 'none'
    resultSection.style.display = 'block'
    chooseSection.style.display = 'none'
    showList(listName);
    // listDrama.inner
}

// ------------------------------------------------------ //
function choose(arr, choose) {
    deleteItemOnce(arr, choose)
    loadName(arr)
}

function loadName(arr) {
    if (arr.length >= 2) {
        let name = getName(arr)
        firstName = name[0];
        secondName = name[1]
        idFirstName.innerHTML = name[0].name
        idSecondName.innerHTML = name[1].name
        firstImage.src =  name[0].foto
        secondImage.src =  name[1].foto
    }else{
        // goto other page
        winner = arr[0];
        showResult();
        favoriteName.innerHTML = winner.name
        favoriteImage.src = winner.foto
    }
    console.log(winner);
}

function getName(arr) {
    let fsName = ''
    let sdName = ''
    let name = []
    do {
        let i = Math.floor(Math.random()*arr.length);
        fsName = arr[i]
        let j = Math.floor(Math.random()*arr.length);
        sdName = arr[j]
    } while (fsName === sdName);
    name.push(fsName);
    name.push(sdName);

    return name
}

function deleteItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}
