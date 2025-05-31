function toggle(element){
    let elment = document.getElementById(element);
    if (elment.style.display === "none" || elment.style.display === "") {
        elment.style.display = "block";
    } else {
        elment.style.display = "none";
    }
}