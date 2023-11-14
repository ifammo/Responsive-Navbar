function openNav(){
    const Linkdiv = document.querySelector(".link-div")
    Linkdiv.classList.remove("translate-x-full")
}
function closeNav(){
    const Linkdiv = document.querySelector(".link-div")
    Linkdiv.classList.add("translate-x-full")
}