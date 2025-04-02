const dog_btn = document.getElementById("dog_btn");
const bear_btn = document.getElementById("bear_btn");
const dog_result = document.getElementById("dog_result");
const bear_result = document.getElementById("bear_result");

dog_btn.addEventListener("click", getRandomDog);
bear_btn.addEventListener("click", getRandomBear);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog(); // skip videos
      } else {
        dog_result.innerHTML = `<img src="${data.url}" alt="dog" />`;
      }
    });
}

function getRandomBear() {
  const width = Math.floor(Math.random() * 200) + 200; // Random width between 200 and 400
  const height = Math.floor(Math.random() * 200) + 200; // Random height between 200 and 400
  const bearImageUrl = `https://placebear.com/${width}/${height}`;
  document.getElementById(
    "bear_result"
  ).innerHTML = `<img src="${bearImageUrl}" alt="Random bear">`;
}

document.getElementById("bear_btn").addEventListener("click", getRandomBear);
