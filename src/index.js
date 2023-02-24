console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const listUrl = "https://dog.ceo/api/breeds/list/all";
let dropdown;
const listA = [];
const listB = [];
const listC = [];
const listD = [];


setTimeout(() => dropdown = document.getElementById('breed-dropdown'), 100)
setTimeout(() => dropdown.addEventListener('change',(e) => {
    //console.log(e.target.value) //INVOKE LIST SHOWING FUNCTION HERE
    showBreeds(e.target.value)
}), 100)

//add to ul, id is dog-breeds

fetch(imgUrl)
.then((resp) => resp.json())
.then((imAr) => {
    imAr.message.forEach((el) =>
    {
        addImage(el)
    })
})

function addImage(imgLink)
{
    const el = document.createElement('img')
    const imgContainer = document.getElementById('dog-image-container')
    el.setAttribute('src', imgLink)
    el.setAttribute('width', '150px')
    imgContainer.appendChild(el)
}

fetch(listUrl)
.then((resp) => resp.json())
.then((resp) => {
    const rawList = resp.message; //Nested Object VALUE + KEY, if no value, then just key
    let list = []; // this is our list of dog breeds.
    for (const key in rawList)
    {
        if (rawList[key].length == 0)
            list.push(key)
        else
            for (let i = 0; i < rawList[key].length; i++)
                list.push(rawList[key][i]+" "+key);
    }
    list.sort();
    //list.forEach((el) => addListItem(el))
    //setTimeout(() => listContainer.innerHTML = "", 1000)
    list.forEach((el) => {
        let char = el.charAt(0).toLowerCase();
        switch (char)
        {
            case 'a': listA.push(el); break;
            case 'b': listB.push(el); break;
            case 'c': listC.push(el); break;
            case 'd': listD.push(el); break;
        }
    })

})

function addListItem(name)
{
    const listContainer = document.getElementById('dog-breeds');
    // listContainer.innerHTML = "";
    const li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', (e) => {
        const liClicked = e.target;
        liClicked.setAttribute('style', 'color: red')
    })
    listContainer.appendChild(li)
}

function showBreeds(letter)
{   
    document.getElementById('dog-breeds').innerHTML = "";
    switch (letter)
    {
        case 'a': listA.forEach((el) => addListItem(el)); break;
        case 'b': listB.forEach((el) => addListItem(el)); break;
        case 'c': listC.forEach((el) => addListItem(el)); break;
        case 'd': listD.forEach((el) => addListItem(el)); break;
    }
}