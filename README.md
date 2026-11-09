# TypeScript Problem Solving & OOP Assignment

## About This Project

This project is part of my TypeScript learning assignment. It covers basic TypeScript concepts, functions, generics, interfaces, promises, and Object-Oriented Programming (OOP).

The assignment has two parts:
- **Problem Solving:** 8 TypeScript coding problems.
- **Blog Posts:** 2 articles explaining TypeScript concepts.

## Technologies Used

- TypeScript
- JavaScript
- Node.js

## Project Structure

```text
typescript-assignment/
│
├── solutions.ts
├── type-vs-interface.md
├── typescript-access-modifiers.md
└── README.md
```

## Problem Solving

All 8 problems are solved in the `solutions.ts` file.

| Problem | Topic |
|---------|-------|
| 1 | Default and Optional Parameters |
| 2 | Union Types and Type Narrowing |
| 3 | Readonly Tuples |
| 4 | Generics and Rest Parameters |
| 5 | Interfaces and Array Filtering |
| 6 | Generics and keyof |
| 7 | Classes, Inheritance, and Access Modifiers |
| 8 | Async Functions and Promises |

## Blog Posts

### 1. Type vs Interface in TypeScript

**File:** `type-vs-interface.md`

This blog explains the differences between `type` and `interface` in TypeScript and when to use each one.

### 2. Access Modifiers in TypeScript OOP

**File:** `typescript-access-modifiers.md`

This blog explains how `public`, `private`, `protected`, and `readonly` work in TypeScript classes with simple examples.

## How to Run the Project

**Step 1:** Clone or download this repository.

**Step 2:** Install TypeScript if it is not installed.

```bash
npm install --save-dev typescript
```

**Step 3:** Compile the TypeScript file.

```bash
npx tsc solutions.ts --target ES2020
```

**Step 4:** Run the JavaScript file.

```bash
node solutions.js
```

**Note:** To see the output of the functions, add `console.log()` calls or other test calls in `solutions.ts`.

## Conclusion

Through this assignment, I practiced important TypeScript concepts and improved my problem-solving skills. I also learned how to use classes, interfaces, generics, and promises to write clean and organized code.