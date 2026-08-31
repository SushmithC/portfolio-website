// Small interactive feature: "Say hi" button
const sayHiBtn = document.getElementById("say-hi-btn");
const hiMessage = document.getElementById("hi-message");

const greetings = [
  "Hi there! 👋",
  "Hello! Thanks for stopping by.",
  "Hey! Great to see you here.",
  "Hi! Hope you're having a good day."
];

if (sayHiBtn && hiMessage) {
  sayHiBtn.addEventListener("click", () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    hiMessage.textContent = randomGreeting;
  });
}
