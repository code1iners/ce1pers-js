import { testMembers, testNumbers } from "../data/testData";
import { generator } from "../usePage";

const { generate } = generator({
  take: 4,
  data: testMembers,
});

const result = generate();
console.log(result);
const nextResult = result.next();
console.log(nextResult);
