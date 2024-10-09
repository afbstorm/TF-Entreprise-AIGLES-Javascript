// ----- BOUCLES ------ //

// While
let i = 0;
while (i < 5) {
  console.log("WHILE ➡️", i);
  i++;
}

// Do...While
i = 0;
do {
  console.log("DOWHILE ➡️", i);
  i++;
} while (i < 5);

// FOR
for (let y = 0; y < arr.length; y++) {
  console.log("FORLOOP ➡️", arr[y]);
}

// BREAK...CONTINUE
for (let y = 0; y < 10; y++) {
  if (y === 5) break;
  if (y % 2 === 0) continue;
  console.log("CONTINUEBREAK ➡️", y);
}
