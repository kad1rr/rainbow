import chalk from "chalk";

const arg = process.argv.slice(2);

const hex = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

let text = chalk.hex(hex())(arg.join(" "));

console.clear();
while (true) {
  if (arg.join("") !== "") {
    text = text + "  " + chalk.hex(hex())(arg.join(" "));
  } else {
    text = text + "  " + chalk.hex(hex())("Hello World!");
  }
  console.log(text);
  setTimeout(() => {}, 1000);
}
