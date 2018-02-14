// listen for a keypress; if we press the right key, then find the matching audio file and play it. if they key doesnt show up on the keyboard, the script shouldnt do anything//


(() => {
console.log('drumkit file loaded');
//remove the highlight from each element after a keypress / transition event
function removeTransition(e) {
console. log(e);
if (e.propertyName !== 'transform') return;
} else {
  e.target.classList.remove('playing');
}

function playSound(e) {
  //debugger;
console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//add a highlight to the element on
key.classList.add('playing');


// if we press a key that dosent have a corresonding audio element. then quit and dont do anything alse
if (!audio) { return;}
// rewind any audio files b4 playing it

audio.currentTime = 0;
audio.play();
//debugger;
}
// tell the browser to listern for a keypress event
window.addEventListener('keydown', playSound);

//loop through all the keys and take the highlight back off when the transition is done
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend'), removeHighlight));
}) ();
