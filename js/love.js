const messages = [
  "This is the first message",
  "Here comes the second message",
  "Now the third message shows up",
  "Finally, this is the last message"
];

let currentIndex = 0;

const messageBox = document.getElementById('message');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

function updateMessage() {
  messageBox.textContent = messages[currentIndex];
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  updateMessage();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % messages.length;
  updateMessage();
});

// Initialize
updateMessage();
