var selectSkin = document.getElementById('select-skin-card');
var selectEyes = document.getElementById('select-eyes-card');
var selectMouth = document.getElementById('select-mouth-card');
var rightEyesIcon = document.getElementsByClassName('show-eyes-card');
var leftSkinIcon = document.getElementById('show-skin-card');
var rightMouthIcon = document.getElementById('show-mouth-card');

//Right Card Selection
var Skin = document.getElementById('skin');
var Eyes = document.getElementById('eyes');
var Mouth = document.getElementById('mouth');


rightEyesIcon[0].addEventListener('click',function(){
    selectSkin.style.display = 'none';
    selectEyes.style.display = 'block';
});
leftSkinIcon.addEventListener('click', function(){
    selectEyes.style.display = 'none';
    selectSkin.style.display = 'block';
});
rightMouthIcon.addEventListener('click',function(){
    selectEyes.style.display = 'none';
    selectMouth.style.display = 'block';
});
rightEyesIcon[1].addEventListener('click',function(){
    selectMouth.style.display = 'none';
    selectEyes.style.display = 'block';
});




//SKIN SELECTION
var yellowSkin = document.getElementById('yellow-skin');
var greenSkin = document.getElementById('green-skin');
var redSkin = document.getElementById('red-skin');

//SKIN IN RIGHT 
yellowSkin.addEventListener('click', function(){
    Skin.src = yellowSkin.src;
});
greenSkin.addEventListener('click', function(){
    Skin.src = greenSkin.src;
});
redSkin.addEventListener('click', function(){
    Skin.src = redSkin.src;
});





//EYES SELECTION
var eyeNormal = document.getElementById('eye-normal');
var eyeClosed = document.getElementById('eye-closed');
var eyeLong = document.getElementById('eye-long');
var eyeLaughing = document.getElementById('eye-laughing');
var eyeRolling = document.getElementById('eye-rolling');
var eyeWinking = document.getElementById('eye-winking');

// EYE IN RIGHT
eyeNormal.addEventListener('click', function(){
    Eyes.src = eyeNormal.src;
});
eyeClosed.addEventListener('click', function(){
    Eyes.src = eyeClosed.src;
});
eyeLong.addEventListener('click', function(){
    Eyes.src = eyeLong.src;
});
eyeLaughing.addEventListener('click', function(){
    Eyes.src = eyeLaughing.src;
});
eyeRolling.addEventListener('click', function(){
    Eyes.src = eyeRolling.src;
});
eyeWinking.addEventListener('click', function(){
    Eyes.src = eyeWinking.src;
});




//MOUTH SELECTION
var mouthOpen = document.getElementById('mouth-open');
var mouthSmiling = document.getElementById('mouth-smiling');
var mouthStraight = document.getElementById('mouth-straight');
var mouthSad = document.getElementById('mouth-sad');
var mouthTeeth = document.getElementById('mouth-teeth');

//MOUTH IN RIGHT
mouthOpen.addEventListener('click', function(){
    Mouth.src = mouthOpen.src;
});
mouthSmiling.addEventListener('click', function(){
    Mouth.src = mouthSmiling.src;
});
mouthStraight.addEventListener('click', function(){
    Mouth.src = mouthStraight.src;
});
mouthSad.addEventListener('click', function(){
    Mouth.src = mouthSad.src;
});
mouthTeeth.addEventListener('click', function(){
    Mouth.src = mouthTeeth.src;
});