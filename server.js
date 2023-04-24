import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  const animal = chance.animal();
  const word = chance.word();
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and im am ${age} yeras old. Im am a ${profession}.
    My best password is: "${animal}${word} ".
    `
  );
});
// export const server = …
