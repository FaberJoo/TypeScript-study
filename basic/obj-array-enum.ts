// const person: {
//   name: string;
//   age: number;
// } 

enum Role {
  ADMIN = 5, 
  READ_ONLY,
  AUTHOR = 'AUTHOR'
}

const person = {
  name: 'Maxmilain',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: [string, number];
// let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}