let missionStatement =
  "At PestKell, our mission is to safeguard homes, businesses, and communities by delivering innovative, eco-conscious, and highly effective pest control solutions. We are committed to using scientifically proven methods and cutting-edge technology to detect, eliminate, and prevent pest infestations—ensuring safety, health, and comfort for every client. Our goal is to provide exceptional service built on integrity, transparency, and responsiveness, while educating our clients on sustainable practices to create long-lasting pest-free environments.";

let visionStatement =
  "Our vision at PestKell is to become the most trusted and respected pest control agency in the region and beyond—recognized for our unwavering commitment to environmental responsibility, customer satisfaction, and operational excellence. We aspire to lead the future of pest management through innovation, continuous learning, and strategic partnerships, helping to build cleaner, safer, and healthier spaces for generations to come.";

let missionEl = document.getElementById("mission_and_vision_text");

let answerTexts = [
  "We focus on long-term prevention through thorough inspections, targeted treatments, and continuous monitoring. Our process doesn't just treat symptoms — we tackle the root causes and provide tips to help customers maintain pest-free environments.",
  "We use eco-friendly materials, advanced techniques, and tailored treatment plans for every customer. Our proactive approach makes sure your pest problems don’t return.",
  "Our reputation is built on transparency, customer satisfaction, and real results. We provide detailed service reports, honest pricing with no hidden fees, and 24/7 support — making us the trusted choice for homes and businesses alike.",
  "We prioritize the health of your family, pets, and environment by using non-toxic, eco-friendly products and scientifically tested procedures. Our technicians are trained to apply treatments precisely, avoid contamination, and follow strict safety protocols throughout every service.",
];

let answerElements = [
  document.getElementById("answerOne"),
  document.getElementById("answerTwo"),
  document.getElementById("answerThree"),
  document.getElementById("answerFour"),
];

let questionBoxes = [
  document.getElementById("questionBox"),
  document.getElementById("questionBox2"),
  document.getElementById("questionBox3"),
  document.getElementById("questionBox4"),
];

function clearAllAnswers() {
  answerElements.forEach((answer) => (answer.textContent = ""));
  questionBoxes.forEach((box) => {
    box.style.backgroundColor = "";
    box.style.color = "";
  });
}

// Show answer and close others
function revealAnswer(index) {
  const isOpen = answerElements[index].textContent !== "";
  clearAllAnswers();
  if (!isOpen) {
    questionBoxes[index].style.backgroundColor = "rgb(7, 131, 7)";
    questionBoxes[index].style.color = "white";
    answerElements[index].textContent = answerTexts[index];
  }
}

// Attach to buttons
function revealAnswerOne() {
  revealAnswer(0);
}
function revealAnswerTwo() {
  revealAnswer(1);
}
function revealAnswerThree() {
  revealAnswer(2);
}
function revealAnswerFour() {
  revealAnswer(3);
}
// Close all if clicked outside
document.addEventListener("click", (e) => {
  const clickedInside = questionBoxes.some((box) => box.contains(e.target));
  if (!clickedInside) {
    clearAllAnswers();
  }
});

// Mission/Vision buttons with toggle functionality
function missionbtn() {
  if (missionEl.textContent === missionStatement) {
    missionEl.textContent = "";
  } else {
    missionEl.textContent = missionStatement;
  }
}

function vissionbtn() {
  if (missionEl.textContent === visionStatement) {
    missionEl.textContent = "";
  } else {
    missionEl.textContent = visionStatement;
  }
}
