# Access Modifiers in TypeScript OOP

## Introduction

In TypeScript, access modifiers control how we can use properties and methods inside a class. They help protect data and organize our code. The main modifiers are `public`, `private`, and `protected`. TypeScript also provides `readonly` to prevent changes to a property after initialization.

## Types of Access Modifiers

**1. Public**

`public` allows us to access a property from anywhere. It is the default modifier in TypeScript.

```typescript
class Student {
    public name: string = "Rakib";
}

const student = new Student();
console.log(student.name);
```

**2. Private**

`private` allows us to access a property only inside the class where it is declared.

```typescript
class Employee {
    private salary: number = 50000;

    getSalary() {
        return this.salary;
    }
}
```

We cannot directly access `salary` from outside the class.

**3. Protected**

`protected` allows access inside the class and its child classes.

```typescript
class Person {
    protected name: string = "Rakib";
}

class Student extends Person {
    showName() {
        return this.name;
    }
}
```

**4. Readonly**

`readonly` allows us to assign a value when declaring a property or inside the constructor. After that, we cannot reassign it.

```typescript
class User {
    readonly id: number = 101;
}

const user = new User();
// user.id = 102; // Error
```

## Conclusion

Access modifiers are useful in Object-Oriented Programming. `public` allows access from anywhere, `private` protects class data, and `protected` supports inheritance. `readonly` prevents reassignment. These features make our code safer and easier to maintain.