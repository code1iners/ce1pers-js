import { members, numbers } from "../data/numbers";
import { usePage } from "../usePage";

const { generate } = usePage({
  take: 4,
  data: members,
});

const result = generate();
console.log(result);
const nextResult = result.next();
console.log(nextResult);
