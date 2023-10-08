const upperPart = [
    "forearms",
    "biceps",
    "shoulders",
    "traps",
    "chest",
    "obliques",
    "abdominals",
    "forearms",
    "triceps",
    "shoulders",
    "traps",
    "traps-middle",
    "lowerback",
    "lats",
    "wrist-extensors",
    "wrist-flexors",
    "hands",
    "short-head-bicep",
    "g3094",
    "long-head-bicep",
    "anterior-deltoid",
    "lateral-deltoid",
    "upper-pectoralis",
    "mid-lower-pectoralis",
    "upper-trapezius",
    "advanced-body-map",
    "obliques",
    "upper-abdominals",
    "lower-abdominals"
];

const lowerParts = [
    "quads",
    "calves",
    "glutes",
    "hamstrings",
    "calves"
];

const humanBody = document.getElementById('male-body-maps');
const userIframe = document.getElementById('user-iframe');

const beginnerbtn = document.getElementById('btn1');
const advancebtn = document.getElementById('btn2');

const beginnerBodyMap = document.querySelector('#beginner-body-map');
const advanceBodyMap = document.querySelector('#advanced-body-map');
const beginnerBodyMaps = document.querySelector('#beginner-body-maps');
const advanceBodyMaps = document.querySelector('#advanced-body-maps');

beginnerbtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "block";
    advanceBodyMap.style.display = "none";
    beginnerBodyMaps.style.display = "block";
    advanceBodyMaps.style.display = "none";
});

advancebtn.addEventListener("click", () => {
    beginnerBodyMap.style.display = "none";
    advanceBodyMap.style.display = "block";
    beginnerBodyMaps.style.display = "none";
    advanceBodyMaps.style.display = "block";

});

humanBody.addEventListener('click', async (event) => {
    const bodyPartName = event.target.parentElement.id;
    console.log(bodyPartName);
    let bodyArea = '';
    if(upperPart.includes(bodyPartName)){
        bodyArea = `upperBody/${bodyPartName}`;
    } else if (lowerParts.includes(bodyPartName)) {
        bodyArea = `lowerBody/${bodyPartName}`;
    }
    if(bodyArea === '') {
        // alert('this is currently in processing try again later-on');
        return;
    }
    const fetchData = await fetch(`http://localhost:8080/${bodyArea}`);
    const response = await fetchData.json();
    console.log(response);
    userIframe.src = response.message;
})


// ------------->>>>>>>>>>>>>>


let chestbtn = document.getElementById("#chest");
let chestcontent = document.querySelector("#chest-content");
chestbtn.addEventListener('click' , ()=>{
    chestcontent.style.visiblity = "visible";
})