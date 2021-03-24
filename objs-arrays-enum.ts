// const person: {
//     name: string;
//     age: number
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role:[number, string] // this marks a tuple type
// } = {
//     name: 'Isi',
//     age: 10,
//     hobbies: ['sports', 'programing'],
//     role: [2, 'author']
// };

// person.role.push('admin'); // this will run as push is an exception in tuples so typeScript can't catch this error
// person.role[1] = 10; // this will gove an error

// person.role = [0, 'admin', 'users']; //this will give an error

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN =5, READ_ONLY = 'READ_ONLY', AUTHOR = 100} // behind the scenes,  the enum assigns {0,1,2}

const person = {
  name: 'Isi',
  age: 10,
  hobbies: ['sports', 'programing'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
let anyFavoriteActivities: any[];

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-const
favoriteActivities = ['sports'];
anyFavoriteActivities = ['sports', 1];

console.log(person);

// eslint-disable-next-line no-restricted-syntax
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // console.log(hobby.map()); //This will give an error
}

if (person.role === Role.AUTHOR) {
  console.log('User is ADMIN');
}
