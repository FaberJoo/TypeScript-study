// const person: {
//   name: string;
//   age: number;
// } 
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maxmilain',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

// person.role.push('admin');
// person.role[1] = 10;

person.role = [0, 'admin'];
person.role.push('author');

console.log(person.role);


let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}