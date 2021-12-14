//write your code here
const alumni = [
  { name: "Jarrit", job: "TPT", language: "JavaScript", age: 22 },
  { name: "Stephanie", job: "JPMorgan", language: "JavaScript", age: 21 },
  { name: "Devonte", job: "WW", language: "JavaScript", age: 23 },
  { name: "Enmanuel", job: "Asana", language: "JavaScript", age: 21 },
  { name: "Shemar", job: "SquareSpace", language: "JavaScript", age: 23 },
  { name: "Cielo", job: "NYT", language: "JavaScript", age: 21 },
];

const animals = ["cheetah", "dog", "cat", "dodobird", "bear", "dolphin"];
const averageAge = (array) =>
  Math.round(
    array.map((alum) => alum.age).reduce((prev, curr) => prev + curr, 0) /
      array.length
  );
console.log(averageAge(alumni));

const bananaBread = (array) =>
  array.map((alum) => ({
    name: alum.name,
    job: alum.job,
    language: alum.language,
    age: alum.age,
    bananaBread: `${alum.name} got banana bread at ${alum.job}`,
  }));

console.log(bananaBread(alumni));

const ninetiesBabies = (array) => array.filter((alum) => alum.age > 21);

console.log(ninetiesBabies(alumni));

const addSchool = (array) =>
  array.map((alum) => ({
    name: alum.name,
    job: alum.job,
    language: alum.language,
    age: alum.age,
    school: `The Marcy Lab School`,
  }));

console.log(addSchool(alumni));

const allUseJavaScript = (array) =>
  array.every((alum) => alum.language === "JavaScript");
console.log(allUseJavaScript(alumni));

const noVowel = (array) =>
  array.map((animal) => animal.replace(/[aeiou]/gi, "x"));

console.log(noVowel(animals));

const onlyVowelA = (array) => array.filter((animal) => animal.includes("a"));

console.log(onlyVowelA(animals));

const longerThanSeven = (array) => array.some((animal) => animal.length > 7);

const allFour = (array) => array.every((animal) => animal.length === 4);

const concatStrings = (array) =>
  array.reduce((prev, curr) => `${prev} ${curr}`);

console.log(concatStrings(animals));
