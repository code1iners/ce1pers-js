"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = require("../data/numbers");
var usePage_1 = require("../usePage");
var generate = (0, usePage_1.usePage)({
    skip: 3,
    take: 4,
    data: numbers_1.members,
}).generate;
var result = generate();
console.log(result);
var nextResult = result.next();
console.log(nextResult);
