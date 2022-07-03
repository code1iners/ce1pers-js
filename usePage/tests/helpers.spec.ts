import { users, testNumbers } from "../src/data/data";
// import { paginator } from "../src/helpers/paginator";
import { paginator } from "../src/helpers";

const { next, previous, goTo, goFirst, goLast, getCursor } = paginator({
  array: users,
  take: 3,
});

console.log(users);
// console.log("g", goTo(0), getCursor());
// console.log("g", goTo(1), getCursor());
// console.log("g", goTo(2), getCursor());
// console.log("g", goTo(3), getCursor());
// console.log("g", goTo(4), getCursor());
// console.log("g", goTo(5), getCursor());
// console.log("g", goTo(0), getCursor());
console.log("n", next(), getCursor());
console.log("n", next(), getCursor());
console.log("n", next(), getCursor());
console.log("n", next(), getCursor());
console.log("n", next(), getCursor());
console.log("n", next(), getCursor());
console.log("gl", goLast(), getCursor());
console.log("p", previous(), getCursor());
console.log("n", next(), getCursor());
console.log("gf", goFirst(), getCursor());
