const scenes = [
  // 0: Intro - Stay Home or Fancy Restaurant
  {
    img: 'images/adventure/scene_1.jpg',
    text: "Two years later, we’re finally going out! Do we stay home and order takeout or go to a fancy restaurant?",
    choices: [
      { label: "Stay Home (Takeout)", next: 1 },
      { label: "Fancy Restaurant", next: 10 }
    ]
  },

  // 1: Takeout - Chicken Alfredo or Chicken Parm
  {
    img: '/images/adventure/takeout.jpeg',
    text: "Wooo YEAHH BABY! Get that Doordash! What do you want to order?",
    choices: [
      { label: "Chicken Alfredo", next: 2 },
      { label: "Chicken Parm", next: 3 }
    ]
  },

  // 2: Chicken Alfredo - Coffee or Baja Blast
  {
    img: '/images/adventure/alfredo.jpeg',
    text: "OMG, I loooooove Chicken Alfredo(but I love you more)! Shall we get something to drink?",
    choices: [
      { label: "Coffee", next: 4 },
      { label: "Baja Blast", next: 5 }
    ]
  },

  // 3: Chicken Parm - Coffee or Baja Blast
  {
    img: '/images/adventure/parm.jpeg',
    text: "Mmmm delicious Chicken parmesan my beloved. Woah, Pumpkin get away from the food! What about something to wash it down?",
    choices: [
      { label: "Coffee", next: 4 },
      { label: "Baja Blast", next: 5 }
    ]
  },

  // 4: Coffee (End)
  {
    img: '/images/adventure/coffee.jpeg',
    text: "This MF chose coffee, what the fuck :vomit:.",
    choices: []
  },

  // 5: Baja Blast - Movie or Game
  {
    img: '/images/adventure/baja.jpg',
    text: "Ngh, my first time trying Baja Blast, this is some good shit. What now?",
    choices: [
      { label: "Watch a Movie", next: 6 },
      { label: "Play a Game", next: 7 }
    ]
  },

  // 6: Movie - Horror or Drama
  {
    img: '/images/adventure/movie.jpg',
    text: "Movie time! I get comfortable next to you. What shall we watch?",
    choices: [
      { label: "Horror", next: 8 },
      { label: "Drama", next: 9 }
    ]
  },

  // 7: Game - You Play or I Play
  {
    img: '/images/adventure/game.jpeg',
    text: "Ahh video games, the thing that brought us together. Do you wanna play?",
    choices: [
      { label: "Alana Plays", next: 11 },
      { label: "Matty Plays", next: 12 }
    ]
  },

  // 8: Horror Movie (End)
  {
    img: '/images/adventure/horror.jpg',
    text: "WHAT THE FUCK IS THIS MOVIE IM SCARRED FOR LIFE NOW CUDDLE ME AND KEEP ME SAFE THROUGH THE NIGHT.",
    choices: []
  },

  // 9: Drama Movie (End)
  {
    img: '/images/adventure/drama.jpeg',
    text: "I start sobbing uncontrollably and my tears fall into your food. Ew. You punch me. I cuddle up like a sobbing cat against you",
    choices: []
  },

  // 10: Fancy Restaurant - Take Car or Walk
  {
    img: '/images/adventure/restaurant.jpeg',
    text: "Going out? Hell yeah! How we goin?",
    choices: [
      { label: "Take the Car", next: 13 },
      { label: "Walk", next: 14 }
    ]
  },

  // 11: You Play (Game End)
  {
    img: '/images/adventure/game-you.png',
    text: "I laugh at how much you suck, and you drop kick me.",
    choices: []
  },

  // 12: I Play (Game End)
  {
    img: '/images/adventure/game-me.png',
    text: "I get distracted and start explaining some esoteric scientific concept to you.",
    choices: []
  },

  // 13: Car Ending
  {
    img: '/images/adventure/car.jpg',
    text: "We get distracted, and we do your favorite thing. Late night, long drive, roof down. Just us.",
    choices: []
  },

  // 14: Walk to Restaurant - Exotic or Reliable food
  {
    img: '/images/adventure/walk.jpeg',
    text: "We walk hand-in-hand to the restaurant. What do you want to order, something risque or something safe?",
    choices: [
      { label: "Something Exotic", next: 15 },
      { label: "Something Reliable", next: 18 }
    ]
  },

  // 15: Exotic Food Disaster - ER or Kiss it better
  {
    img: '/images/adventure/fish.jpg',
    text: "We order a poisson de whatever - a fish jumps out of the dish and bites my nose! What the fuck is this restarurant!",
    choices: [
      { label: "Take me to ER", next: 16 },
      { label: "Just kiss it better", next: 17 }
    ]
  },

  // 16: ER Kiss Ending
  {
    img: '/images/adventure/ambulance.jpeg',
    text: "We're going to the ER in an ambulance, but that won't stop us from having our fun. Hell yeah, we're making out in the back of an ambulance.",
    choices: []
  },

  // 17: Swollen Nose Ending
  {
    img: '/images/adventure/nose.jpg',
    text: "You kiss my nose booboo away, but I get still get a swollen nose. At least I look cute with a bandaid.",
    choices: []
  },

  // 18: Reliable Food - Red or White Wine
  {
    img: '/images/adventure/meal.jpg',
    text: "Safety first, don't wanna be spending most of the date in the toilet. Now, as adults who want to look cool drink, red wine or white wine?",
    choices: [
      { label: "Red Wine", next: 19 },
      { label: "White Wine", next: 20 }
    ]
  },

  // 19: Red Wine - Talk or Stare
  {
    img: '/images/adventure/red.jpeg',
    text: "We drink our red wine and wait awkwardly, my foot tapping, you scratching your hair, wondering if conversation would happen.",
    choices: [
      { label: "Talk about last year", next: 21 },
      { label: "Stare awkwardly", next: 22 }
    ]
  },

  // 20: White Wine - Talk or Stare
  {
    img: '/images/adventure/white.jpeg',
    text: "White wine it is. I swirl the glass dramatically, and you roll your eyes. We drink our wine and wait awkwardly, wondering if conversation would happen.",
    choices: [
      { label: "Talk about last year", next: 21 },
      { label: "Stare awkwardly", next: 22 }
    ]
  },

  // 21: Laughing Ending
  {
    img: '/images/adventure/laugh.jpg',
    text: "We spend the night talking about our years together. All the times we cried, and laughed, and how much I loved you. I love you, Alana, truly.",
    choices: []
  },

  // 22: Awkward Stare Ending
  {
    img: '/images/adventure/stare.jpg',
    text: "We stare at each other, until we can't take it anymore. We both lean in for a kiss at the same time, and we keep kissing until the end of the date(they kick us out of the restaurant).",
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

// Load the initial scene when the document is ready

document.addEventListener('DOMContentLoaded', () => {
  loadScene(current);

  const clickSound = document.getElementById('click-sound');

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  // Attach to ONLY choice buttons
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound(); // sound
      const nextIndex = parseInt(btn.dataset.next, 10);
      loadScene(nextIndex);
      current = nextIndex;
    });
  });

  // Restart button (no sound)
  document.getElementById('restart-btn').addEventListener('click', () => {
    current = 0;
    loadScene(current);
    document.getElementById('choice1').style.display = 'inline-block';
    document.getElementById('choice2').style.display = 'inline-block';
  });
});

