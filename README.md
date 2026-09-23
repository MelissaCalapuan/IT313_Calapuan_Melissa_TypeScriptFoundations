IT 313 - Laboratory 3
## TypeScript Foundations for React Native

### Enrollment Eligibility Checker

This project is the TypeScript version of the Enrollment Eligibility Checker from Laboratory 2. The purpose of this activity is to practice the basic TypeScript features that can be useful when developing React Native applications.

The program gets the students' grades, calculates their average, checks if they are passing or on probation, and displays a simple enrollment eligibility report.

Unlike the previous JavaScript version, this version uses TypeScript to make the program more organized and type-safe. TypeScript helps detect incorrect values and type-related errors before the program is executed.

---

## Objectives

The main objectives of this laboratory are to:

- Convert a JavaScript program into TypeScript.
- Use basic TypeScript type annotations.
- Use interfaces and type aliases.
- Use an enum for enrollment status.
- Use union types.
- Use optional properties.
- Use generics.
- Use ES module import and export.
- Use asynchronous functions with Promise, async, and await.
- Use map(), filter(), and reduce().
- Check the program using the TypeScript compiler.

---

## Problem Description

The program is an Enrollment Eligibility Checker for a registrar's office.

Each student has three grades:

- Prelim
- Midterm
- Final

The program calculates the student's average grade.

The passing standard is:

- *75 and above* = PASSING
- *Below 75* = PROBATION

Students who are on probation will also receive the remark:

Needs consultation

The program then displays the individual student results and the overall class average.

---

## Student Data

The program uses the following sample students:

| Student | Prelim | Midterm | Final |
|---|---:|---:|---:|
| Ana Cruz | 85 | 90 | 88 |
| Bea Santos | 70 | 65 | 60 |
| Cid Ramos | 95 | 92 | 97 |
| Dex Alonzo | 60 | 55 | 50 |
| Eli Tan | 78 | 80 | 76 |

---

## TypeScript Features Used

### 1. Basic Type Annotations

TypeScript types are used to identify what kind of value a variable or function should accept.

For example:

name is a string, while the grades are numbers.

This helps prevent accidentally using the wrong type of value.

---

### 2. Interface

The Enrollee interface describes the structure of each student.

It contains:

- name
- prelim
- midterm
- final

Example:

`interface Enrollee {
  name: string;
  prelim: number;
  midterm: number;
  final: number;
}`

I used an interface because the student data has a fixed structure that needs to be followed.

---

### 3. EligibilityReport Interface

The program also uses an EligibilityReport interface for the final results.

It contains:

- name
- average
- status
- remarks

The remarks property is optional because it is only needed for students who are on probation.

---

### 4. Enum

The program uses an EnrollmentStatus enum.

It has two possible values:

- Passing
- Probation

Using an enum makes the status more controlled instead of using random strings.

---

### 5. Union Type

A union type is also used for the batch ID.

The batch ID can contain either a string or a number.

Example:

let batchId: string | number;

Before using the value as a specific type, the program checks it using typeof.

This demonstrates TypeScript type narrowing.

---

### 6. Generic Function

The program uses a generic groupBy() function.

The function is used to group the report entries based on their status.

Generics allow the function to work with different types while still keeping type safety.

---

### 7. Optional Property

The remarks property is optional:

remarks?: string

This means that a report does not always need to have a remark.

For this project, the remark is only added when the student is on probation.

---

### 8. ES Modules

The grade functions are placed in a separate file called gradeUtils.ts.

The functions are exported from that file and imported into the main TypeScript file.

This keeps the program organized and makes the functions reusable.

---

### 9. Promise and Async/Await

The program uses getEnrollees() to simulate getting student data from a registrar API.

A short delay is used before the data is returned.

The main function uses async and await to wait for the data.

A try/catch block is also used so that a possible connection error can be handled properly instead of crashing the program.

---

### 10. Map and Reduce

The map() method is used to create the eligibility reports for every student.

The program uses:

- computeAverage() to calculate the average.
- getStatus() to determine the student's status.

The reduce() method is then used to calculate the overall class average.

---

## Project Structure

The project contains the following main files:

gradeUtils.ts  
Contains the functions for calculating the average and determining the enrollment status.

main.ts  
Contains the main program, student data, interfaces, enum, generic function, async operation, and report output.

tsconfig.json  
Contains the TypeScript configuration. Strict mode is enabled to help detect type-related problems.

README.md  
Contains the project explanation and instructions for running the program.

---

## TypeScript Configuration

The project uses a tsconfig.json file.

Strict mode is enabled:

"strict": true

Strict mode helps TypeScript detect possible problems in the code before the program is executed.

---

## How I Run the Project

### Step 1 - Install Node.js

I'd make sure Node.js is installed on the computer.

Check the installation using:

node -v

Then check npm:

npm -v

---

### Step 2 - Install TypeScript

Install TypeScript if it is not yet installed:

npm install -D typescript

---

### Step 3 - Install ts-node

Install ts-node so the TypeScript files can be executed directly:

npm install -D ts-node

---

### Step 4 - Initialize TypeScript

If tsconfig.json has not been created yet, run:

npx tsc --init

Then make sure that strict mode is enabled in the configuration.

---

### Step 5 - Run the Program

Run the main TypeScript file using:

npx ts-node main.ts

The exact command may be adjusted depending on the name of the main TypeScript file.

---

## Type Checking

Before considering the program complete, TypeScript should be checked for errors.

Run:

npx tsc --noEmit

If there are no errors, the terminal should return no error messages.

Expected result:

no output - 0 type errors

---

## Expected Output

The program should display a report similar to:

=== IT313 Enrollment Eligibility Report (TypeScript) ===

Ana Cruz - Average: 87.67 - PASSING

Bea Santos - Average: 65.00 - PROBATION - Needs consultation

Cid Ramos - Average: 94.67 - PASSING

Dex Alonzo - Average: 55.00 - PROBATION - Needs consultation

Eli Tan - Average: 78.00 - PASSING

Class Average: 76.07

Passing: 3 / 5

The formatting may be slightly different depending on the implementation, but the information should match the required output.

---

## Common Error Encountered

While working on the program, one possible error I encountered was a type mismatch in the student grade data or function parameters.

For example, if a value that should be a number was accidentally written as a string, TypeScript reported an error before the program was executed.

### How I Solved It

I checked the line where the error was reported and compared the value with the expected type in the interface or function parameter.

After correcting the value to the proper type, I run:

npx tsc --noEmit

again to make sure that the error was fixed.

This showed me that TypeScript can help detect mistakes early instead of waiting for the program to run.

---

## What I Learned

From this laboratory, I learned how TypeScript can make a JavaScript program more organized and safer.

I learned how to use interfaces to define the structure of data, enums to control possible status values, union types for values that can have more than one type, optional properties, and generics.

I also learned how to use TypeScript with asynchronous functions and modules.

The most useful part for me was seeing how TypeScript can identify mistakes before the program runs. This can be helpful when developing larger applications because it can prevent simple type-related errors.

---

## Conclusion

This laboratory helped me understand the basic foundations of TypeScript and how they can be applied to a real program.

The Enrollment Eligibility Checker was originally created using JavaScript, but converting it to TypeScript made the data, functions, and results more clearly defined.

The concepts learned in this activity can also be applied later when working with React Native, especially when creating typed components, props, states, and other application data.

---

## Author

Name: Calapuan, Melissa M. 
Section: BSIT - 3A  
Course:IT 313 - Mobile Programming  
Laboratory: Laboratory 3 - TypeScript Foundations for React Native

---

## Repository

GitHub Repository:

IT313_Calapuan_Melissa_TypeScriptFoundations

GitHub Link:

[(https://github.com/MelissaCalapuan/IT313_Calapuan_Melissa_TypeScriptFoundations.git)]
