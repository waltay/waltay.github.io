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
    
    l2.array.forEach(element => {
        element.classList.add("business");
        element.classList.remove("business-list");
    });
}

function change2list() {
    let l = document.getElementById("directory-container");
    l.classList.add("directory-list");
    l.classList.remove("directory-grid");
    let l2 = document.getElementsByClassName("business");
    
    l2.array.forEach(element => {
        element.classList.add("business-list");
        element.classList.remove("business");
    });
    
}

