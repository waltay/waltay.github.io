function openMenu(){
    document.getElementById("navigation").style.width = '240px';
}

function closeMenu() {
    document.getElementById("navigation").style.width = '0px';
}

function change2grid() {
    document.getElementsByClassName("directory-list").className = "directory-container";
    document.getElementsByClassName("business-list").className = "business";
}

function change2list() {
    document.getElementsByClassName("directory-container").className = "directory-list";
    document.getElementsByClassName("business").className = "business-list";
}

