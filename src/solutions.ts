// Problem 1:
function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier
}

// Problem 2:
function processInput(value: string | number | boolean): string | number {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}

// Problem 3:
function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const [latitude, longitude, locationNam] = coordinate;
    return `Location: ${locationNam} (${latitude}, ${longitude})`;
}

// Problem 4:
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// Problem 5:
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}

const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
]

getPopularCourses(courses, 80);

// Problem 6:
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]);
}

const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
]

// Problem 7:
class Employee {
    constructor(protected name: string, private baseSalary: number) { }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Rakib", 50000, "Engineering");

// Problem 8:
async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"))
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    })
};