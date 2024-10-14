v# Net Salary Calculator

The `calculateNetSalary` function is a JavaScript utility for calculating an employee's net salary after accounting for deductions. This function integrates NSSF (National Social Security Fund), NHIF (National Hospital Insurance Fund), and PAYE (Pay As You Earn) tax rates to provide a comprehensive net salary calculation.

## Overview

The `calculateNetSalary` function computes the net salary based on the following components:
- **Gross Salary**: Sum of basic salary and benefits.
- **NSSF Deduction**: Deduction based on fixed tiers.
- **NHIF Deduction**: Deduction based on salary brackets.
- **PAYE Deduction**: Income tax based on progressive tax brackets.

## Function Signature

```javascript
function calculateNetSalary(basicSalary, benefits)

# Speed Check Utility

The `checkSpeed` function is a JavaScript utility designed to evaluate and provide feedback on a given speed relative to a predefined speed limit. This function helps determine if a driver is within the speed limit, how many demerit points they accrue if they exceed the limit, or if their license should be suspended due to excessive speeding.

## Overview

The `checkSpeed` function takes a speed value and performs the following checks:

1. **Validates the Input**: Ensures that the input is a valid number.
2. **Compares Speed to Limit**: Determines if the speed is within the acceptable limit or exceeds it.
3. **Calculates Demerit Points**: Computes demerit points based on the amount by which the speed exceeds the limit.
4. **Checks License Suspension**: Determines if the number of demerit points exceeds the threshold for license suspension.

## Function Signature

```javascript
function checkSpeed(speed)

# Student Grade Calculator

The `getStudentGrade` function is a JavaScript utility designed to prompt the user for a student's marks, validate the input, and then determine and display the corresponding grade based on predefined grading criteria.

## Overview

The `getStudentGrade` function performs the following actions:
1. **Prompt User for Input**: Requests the user to enter the student's marks.
2. **Validate Input**: Ensures the input is a valid number within the range of 0 to 100.
3. **Determine Grade**: Assigns a grade based on the provided marks.
4. **Display Grade**: Shows the calculated grade to the user via an alert.

## Function Signature

```javascript
function getStudentGrade()
