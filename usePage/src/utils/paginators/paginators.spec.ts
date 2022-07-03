import { helpers } from "../helpers";
import { users } from "../../data/data";

const { paginator } = helpers;

const { getCurrentPage, getValues, next, previous, goTo, goFirst, goLast } =
  paginator({
    array: users,
    take: 2,
  });

console.log(users);
console.log("g", goTo(0));
console.log("g", goTo(1));
console.log("g", goTo(2));
console.log("g", goTo(3));
console.log("g", goTo(4));
console.log("g", goTo(5));
console.log("g", goTo(0));
console.log("n", next());
console.log("n", previous());
console.log("gl", goLast());
console.log("gf", goFirst());
