
const message = document.querySelector('#message');
const input = document.querySelector('#favchap');
if (input !== "") {
  message.innerHTML = `Thank you. Your favorite chapter is ${input}.`;
} else {
  message.innerHTML = `Please enter a chapter.`;
}