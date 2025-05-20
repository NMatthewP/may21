const messages = [
"You know that I love you, but why?",
"1. You make me smile like no one has. Your jokes are so bad, they're good.",
"2. You keep me company when I wouldn't want to keep me company.",
"3. You have a goated music taste.",
"4. You're soft, but stern when you need to be.",
"5. You listen to me, you have no idea how important that is to me!",
"6. Speaking of, you then make an effort to understand, ask questions, and even learn. Isn't that awesome?",
"7. You always want to cuddle me, and that's something I adore.",
"8. You have the best laugh, I could listen to it all day.",
"9. That goddamn smile, honestly.",
"10. You're my best friend.",
"11. You're smart in your own way, don't let anyone tell you otherwise.",
"12. You're incredibly resilient.",
"13. Your eyes always have me staring into them. I'm stuck in those pools.",
"14. You make me want to strive for greatness. They say that there's no point in doing something great if there's no one to do it for.",
"15. You want to go on so many adventures with me.",
"16. You've got some dashing style (that one dress :droll:)",
"17. You're my partner in crime :3",
"18. You make me feel so special and adored. I don't know what I'd do without you.",
"19. You make the world around you brighter, your family, friends, and co-workers.",
"20. I feel like the most important person in the world when I'm with you.",
"21. You're ambitious, and I adore that.",
"22. You support me, no matter what.",
"23. Hanging out with you is the best part of my day.",
"24. I love sleeping on call with you, it's the best.",
"25. You've spent an entire year with me, and for that, I love you."
	
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
