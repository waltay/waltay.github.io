const directory = 'https://waltay.github.io/provo-cc/json/directory.json';

fetch(directory)
  .then((response) => response.json())
  .then((jsObject) => {
    
    const business = jsObject['business'];

    business.forEach(element => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        let innerDiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let hr = document.createElement('hr');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let imgDiv = document.createElement('div');

        innerDiv.setAttribute('class', 'busInfo');
        h2.textContent = element.name;
        phone.textContent = element.phone;
        email.textContent = element.email;
        website.textContent = "Visit Website";
        website.setAttribute('href', element.website);
        website.setAttribute('target', '_blank');
        website.setAttribute('rel', 'noopener noreferrer');

        innerDiv.appendChild(h2);
        innerDiv.appendChild(hr);
        innerDiv.appendChild(phone);
        innerDiv.appendChild(email);
        innerDiv.appendChild(website);

        div.setAttribute('class', 'business');
        imgDiv.setAttribute('class', 'img-container');
        image.setAttribute('src', element.imgPath);
        image.setAttribute('alt', element.imgDesc);

        imgDiv.appendChild(image);

        div.appendChild(imgDiv);
        div.appendChild(innerDiv);

        let l = document.getElementById("directory-container");
        l.appendChild(div);
        
    });

  });

function openMenu(){
    let l = document.getElementById("navigation");
    l.classList.add("navigation-small");
}

function closeMenu() {
    let l = document.getElementById("navigation");
    l.classList.remove("navigation-small");
}

function change2grid() {
    let l = document.getElementById("directory-container");
    l.classList.add("directory-grid");
    l.classList.remove("directory-list");
    let l2 = document.getElementsByClassName("business-list");
    
    for(var i = 0; i < l2.length; i) {
        console.log(i);
        l2[i].classList.add("business");
        l2[i].classList.remove("business-list");
    }
}

function change2list() {
    let l = document.getElementById("directory-container");
    l.classList.add("directory-list");
    l.classList.remove("directory-grid");
    let l2 = document.getElementsByClassName("business");

    console.log(l2.length);

    
    for(var i = 0; i < l2.length; i) {
        console.log(l2[i]);
        console.log(l2);
        l2[i].classList.add("business-list");
        l2[i].classList.remove("business");
    }
}

var mq = window.matchMedia( "(max-width: 40em)" );
if (mq.matches) {
    let l = document.getElementById("directory-container");
    l.classList.add("directory-grid");
    l.classList.remove("directory-list");
    let l2 = document.getElementsByClassName("business-list");
    
    for(var i = 0; i < l2.length; i) {
        console.log(i);
        l2[i].classList.add("business");
        l2[i].classList.remove("business-list");
    }
}