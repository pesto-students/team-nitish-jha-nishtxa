const person = {
    name: "Bob",
    age: 30,
    email: "bobvent@gmail.com",
  
    setAge(val) {
      return (this.age = val);
    },
    getAge() {
      return _age;
    },
};

Object.defineProperty(person, "name", {
writable: false,
});

Object.defineProperty(person, "email", {
writable: false,
});

let _age = null;
Object.defineProperty(person, "age", {
set: function (newAge) {
    _age = newAge;
},
});