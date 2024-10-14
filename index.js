function getStudentGrade() {
    let marks;
    while (true) {
        marks = prompt("Enter the student's marks (0 to 100):");
        marks = parseFloat(marks);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            break;
        } else {
            alert("Marks should be a number between 0 and 100. Please try again.");
        }
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    alert("The grade is: " + grade);
}

getStudentGrade();
