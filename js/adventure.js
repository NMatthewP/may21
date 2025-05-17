const scenes = [
  // 0: Intro - Stay Home or Fancy Restaurant
  {
    img: 'images/scene1.jpg',
    text: "It’s our first date night. Should we stay home and get takeout 🍕 or go out to a fancy restaurant 🍽?",
    choices: [
      { label: "Stay Home (Takeout)", next: 1 },
      { label: "Fancy Restaurant", next: 10 }
    ]
  },

  // 1: Takeout - Chicken Alfredo or Chicken Parm
  {
    img: 'images/takeout.jpg',
    text: "We stay home and get takeout! Do we get Chicken Alfredo 🍝 or Chicken Parm 🍗?",
    choices: [
      { label: "Chicken Alfredo", next: 2 },
      { label: "Chicken Parm", next: 3 }
    ]
  },

  // 2: Chicken Alfredo - Coffee or Baja Blast
  {
    img: 'images/alfredo.jpg',
    text: "You’ve picked Chicken Alfredo! Do you want Coffee ☕ or Baja Blast 🍹?",
    choices: [
      { label: "Coffee", next: 4 },
      { label: "Baja Blast", next: 5 }
    ]
  },

  // 3: Chicken Parm - Coffee or Baja Blast
  {
    img: 'images/parm.jpg',
    text: "You’ve picked Chicken Parm! Do you want Coffee ☕ or Baja Blast 🍹?",
    choices: [
      { label: "Coffee", next: 4 },
      { label: "Baja Blast", next: 5 }
    ]
  },

  // 4: Coffee (End)
  {
    img: 'images/coffee.jpg',
    text: "Ewwww, Coffee? That’s a dealbreaker! 🤮 End of the route.",
    choices: []
  },

  // 5: Baja Blast - Movie or Game
  {
    img: 'images/baja.jpg',
    text: "Ahh, Baja Blast! Now, do we watch a movie 🎥 or play a game 🎮?",
    choices: [
      { label: "Watch a Movie", next: 6 },
      { label: "Play a Game", next: 7 }
    ]
  },

  // 6: Movie - Horror or Drama
  {
    img: 'images/movie.jpg',
    text: "Let’s watch a movie! Do we go for a horror movie or a drama?",
    choices: [
      { label: "Horror", next: 8 },
      { label: "Drama", next: 9 }
    ]
  },

  // 7: Game - You Play or I Play
  {
    img: 'images/game.jpg',
    text: "Let’s play a game! Should I play or do you want to play?",
    choices: [
      { label: "You Play", next: 11 },
      { label: "I Play", next: 12 }
    ]
  },

  // 8: Horror Movie (End)
  {
    img: 'images/horror.jpg',
    text: "You were scared out of your mind! Nightmare End.",
    choices: []
  },

  // 9: Drama Movie (End)
  {
    img: 'images/drama.jpg',
    text: "Tears in the Alfredo! A wholesome end. 🥺",
    choices: []
  },

  // 10: Fancy Restaurant - Take Car or Walk
  {
    img: 'images/restaurant.jpg',
    text: "How do we get there? Take the car 🛻 or go for a romantic walk 🚶‍♀️?",
    choices: [
      { label: "Take the Car", next: 13 },
      { label: "Walk", next: 14 }
    ]
  },

  // 11: You Play (Game End)
  {
    img: 'images/game-you.jpg',
    text: "I laugh at your lack of skills! End.",
    choices: []
  },

  // 12: I Play (Game End)
  {
    img: 'images/game-me.jpg',
    text: "I get sidetracked explaining science. End.",
    choices: []
  },

  // 13: Car Ending
  {
    img: 'images/car.jpg',
    text: "Driving under midnight skies, sunroof down, we make out in the car. End.",
    choices: []
  },

  // 14: Walk to Restaurant - Exotic or Reliable food
  {
    img: 'images/walk.jpg',
    text: "We walk hand-in-hand to the restaurant. What do you want to order?",
    choices: [
      { label: "Something Exotic", next: 15 },
      { label: "Something Reliable", next: 18 }
    ]
  },

  // 15: Exotic Food Disaster - ER or Kiss it better
  {
    img: 'images/fish-bite.jpg',
    text: "A fish jumps out of the dish and bites my nose!",
    choices: [
      { label: "Take me to ER", next: 16 },
      { label: "Just kiss it better", next: 17 }
    ]
  },

  // 16: ER Kiss Ending
  {
    img: 'images/ambulance.jpg',
    text: "Making out in the back of an ambulance. End.",
    choices: []
  },

  // 17: Swollen Nose Ending
  {
    img: 'images/swollen-nose.jpg',
    text: "You kiss my nose booboo away, but I get a swollen nose. End.",
    choices: []
  },

  // 18: Reliable Food - Red or White Wine
  {
    img: 'images/meal.jpg',
    text: "Solid choice. Now, red wine 🍷 or white wine 🥂?",
    choices: [
      { label: "Red Wine", next: 19 },
      { label: "White Wine", next: 20 }
    ]
  },

  // 19: Red Wine - Talk or Stare
  {
    img: 'images/red-wine.jpg',
    text: "We sip red wine and talk about the past year.",
    choices: [
      { label: "Talk about last year", next: 21 },
      { label: "Stare awkwardly", next: 22 }
    ]
  },

  // 20: White Wine - Talk or Stare
  {
    img: 'images/white-wine.jpg',
    text: "White wine it is. You swirl the glass dramatically.",
    choices: [
      { label: "Talk about last year", next: 21 },
      { label: "Stare awkwardly", next: 22 }
    ]
  },

  // 21: Laughing Ending
  {
    img: 'images/laugh.jpg',
    text: "A night of laughter and nostalgia. End.",
    choices: []
  },

  // 22: Awkward Stare Ending
  {
    img: 'images/kiss.jpg',
    text: "We stare until it becomes a passionate kiss. End.",
    choices: []
  }
];

let current = 0;

function loadScene(index) {
  const scene = scenes[index];
  const imgEl = document.getElementById('scene-img');
  const textEl = document.getElementById('scene-text');
  const choice1 = document.getElementById('choice1');
  const choice2 = document.getElementById('choice2');

  imgEl.src = scene.img;
  imgEl.alt = `Scene ${index}`;
  textEl.textContent = scene.text;

  if (scene.choices.length === 2) {
    choice1.style.display = 'inline-block';
    choice2.style.display = 'inline-block';

    choice1.textContent = scene.choices[0].label;
    choice2.textContent = scene.choices[1].label;
    choice1.dataset.next = scene.choices[0].next;
    choice2.dataset.next = scene.choices[1].next;
  } else {
    // No choices = end scene
    choice1.style.display = 'none';
    choice2.style.display = 'none';
  }
}

document.querySelectorAll('.choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nextIndex = parseInt(btn.dataset.next, 10);
    loadScene(nextIndex);
    current = nextIndex;
  });
});

document.getElementById('restart-btn').addEventListener('click', () => {
  current = 0;  // reset to the first scene
  loadScene(current);
  // Make sure to show the choice buttons again in case they were hidden in the end scenes
  document.getElementById('choice1').style.display = 'inline-block';
  document.getElementById('choice2').style.display = 'inline-block';
});
document.addEventListener('DOMContentLoaded', () => {
  loadScene(current);
});
