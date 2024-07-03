function calculateGrade(marks) {
    if(marks > 79){
        return 'A';
    } else if (marks >= 60 && marks <= 79){
        return'B';
    }else if (marks >=50 && marks <= 59){
        return 'C';
    } else if (marks>= 40 && marks <= 49){
        return'D';
    } else {
        return 'E';
    }
}

// Example usage:
let marks =parselnt(prompt("Enter student's marks (0-100):"));
let grade =calculateGrade(marks);
console.log('student grade:${grade');

