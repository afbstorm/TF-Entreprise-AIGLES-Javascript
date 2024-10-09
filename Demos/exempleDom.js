// let responseUser = prompt("Quelle page lis-tu ?");

// alert("a malibu");

// console.log(typeof responseUser);

const p = document.getElementById("exemple").innerText;
console.log(p);

const div = (document.getElementById("div").innerHTML = "Salut");

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  console.log("j'ai été cliqué yay.");
});
