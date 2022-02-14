import { testMembers, testNumbers } from "../data/testData";
import { usePage } from "../usePage";

const { generate } = usePage({
  take: 4,
  data: testMembers,
});

const result = generate();
console.log(result);
const nextResult = result.next();
console.log(nextResult);
