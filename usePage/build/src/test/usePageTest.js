"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testData_1 = require("../data/testData");
var usePage_1 = require("../usePage");
var generate = (0, usePage_1.generator)({
    take: 4,
    data: testData_1.testMembers,
}).generate;
var result = generate();
console.log(result);
var nextResult = result.next();
console.log(nextResult);
