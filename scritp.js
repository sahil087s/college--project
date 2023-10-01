const beginnerbtn = document.getElementById('btn1');
const advancebtn = document.getElementById('btn2');

const beginnerBodyMap = document.querySelector('#beginner-body-map');
const advanceBodyMap = document.querySelector('#advanced-body-map');
const beginnerBodyMaps = document.querySelector('#beginner-body-maps');
const advanceBodyMaps= document.querySelector('#advanced-body-maps');

beginnerbtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "block";
    advanceBodyMap.style.display = "none";
    beginnerBodyMaps.style.display = "block";
    advanceBodyMaps.style.display = "none";
})

advancebtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "none";
    advanceBodyMap.style.display = "block";
    beginnerBodyMaps.style.display = "none";
    advanceBodyMaps.style.display = "block";
    
})