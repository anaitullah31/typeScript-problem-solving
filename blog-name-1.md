# Type vs Interface in TypeScript

## Introduction

In TypeScript, `type` and `interface` help us define the structure of data. Both are useful for checking data types and avoiding mistakes in our code. They are similar, but they have some differences.

## Main Differences

**1. Type Alias**

A `type` can define objects, strings, numbers, unions, and tuples.

```typescript
type User = {
    name: string;
    age: number;
};

type ID = string | number;
```

Here, `User` defines an object, while `ID` can be a string or a number.

**2. Interface**

An `interface` is mainly used to define the structure of objects and classes.

```typescript
interface User {
    name: string;
    age: number;
}
```

**3. Extending Types**

An interface uses `extends` to inherit properties from another interface.

```typescript
interface Person {
    name: string;
}

interface Student extends Person {
    grade: number;
}
```

A type alias can combine types using `&`.

```typescript
type Person = { name: string };
type Student = Person & { grade: number };
```

**4. Declaration Merging**

An interface can be declared multiple times with the same name. TypeScript combines their properties. A type alias does not support this feature.

## When Should We Use Them?

Use `interface` when working with objects, classes, or inheritance. Use `type` when working with unions, tuples, or other custom types.

## Conclusion

Both `type` and `interface` are important in TypeScript. They help us write safer and cleaner code. Choosing the right one depends on what we need to create.