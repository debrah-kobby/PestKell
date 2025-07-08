let missionStatement =
  "At PestKell, our mission is to safeguard homes, businesses, and communities by delivering innovative, eco-conscious, and highly effective pest control solutions. We are committed to using scientifically proven methods and cutting-edge technology to detect, eliminate, and prevent pest infestations—ensuring safety, health, and comfort for every client. Our goal is to provide exceptional service built on integrity, transparency, and responsiveness, while educating our clients on sustainable practices to create long-lasting pest-free environments.";
let visionStatement =
  "Our vision at PestKell is to become the most trusted and respected pest control agency in the region and beyond—recognized for our unwavering commitment to environmental responsibility, customer satisfaction, and operational excellence. We aspire to lead the future of pest management through innovation, continuous learning, and strategic partnerships, helping to build cleaner, safer, and healthier spaces for generations to come..";

let missionEl = document.getElementById("mission_and_vision_text");

function missionbtn() {
  missionEl.textContent = missionStatement;
}

function vissionbtn() {
  missionEl.textContent = visionStatement;
}

function removeTxtBtn() {
  missionEl.textContent = "";
}
