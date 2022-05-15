## object shorthand assignment

```js
let name = "noona";
let age = "30";

let person = {
  name,
  age,
};
```

## Destructuring 객체를 분해해서 값을 가져옴

```js
let person = {
  name: "noona",
  age: 20,
};

let name = person.name;
let age = person["age"];

let { name, age } = person;
```

## 배열 (이 문법이 가장 많이 쓰임)

```js
let array = [1, 2, 3, 4];
let [a, b] = array; // array 안의 배열 순서대로 변수에 들어감
let [a, b, ...rest] = array; // rest === 나머지값

// spread ...

let person = { name: "lea", age: 30 };

let person2 = { ...person, name: "lulu" }; //객체 복사해서 새로운 객체 생성, 키값을 변경할 수 있다.
let person3 = person; //바로 할당하게 되면 새로 생기는 객체가 아님(복사하는 형태가 다름)

// person ==! person2
// person === person3

let a = [1, 2];
let b = [...a, 3]; // [1,2,3]

let c = [...a, ...b]; // a, b, 모두 가져올 수 있음
```

## 삼항연산자

```js
let cat = { name: "summer", age: 6 };

if (cat) {
  console.log(cat.name);
} else {
  console.log("there is no cat");
}

// ? 왼쪽이 true 면 ? 오른쪽 실행, 아니면 : 뒤에 실행
cat ? cat.name : "there is no cat";
```
