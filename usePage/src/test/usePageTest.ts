import { members, numbers } from "../data/numbers";
import { usePage } from "../usePage";

const { generate } = usePage({
  skip: 3,
  take: 4,
  data: members,
});

const result = generate();
console.log(result);
const nextResult = result.next();
console.log(nextResult);
