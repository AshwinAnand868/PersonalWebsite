/*
    Name - Ashwin Anand
    Student id - 152042206
*/
let students = [
    {
       studentName : prompt("Enter student name: "),
       marksObtained : prompt("Enter marks obtained in subject: "),
       totalMarks : 80
    },
    {
        studentName : prompt("Enter student name: "),
       marksObtained : prompt("Enter marks obtained in subject: "),
       totalMarks : 80
       
    },
    {
        studentName : prompt("Enter student name: "),
        marksObtained : prompt("Enter marks obtained in subject: "),
        totalMarks : 80

    },
    {
        studentName : prompt("Enter student name: "),
        marksObtained : prompt("Enter marks obtained in subject: "),
        totalMarks : 80
        
    }
]



students.forEach(student => {
    
    percentage = (student.marksObtained/student.totalMarks) * 100;

    if( percentage >= 90){
         student['percentage'] = percentage;
         student['grade'] = 'A';
     }
    else if( percentage >= 80){
         student['percentage'] = percentage;
         student['grade'] = 'B';
     }
    else if( percentage >= 70){
         student['percentage'] = percentage;
         student['grade'] = 'B+';
     }
    else if( percentage >= 60){
         student['percentage'] = percentage;
         student['grade'] = 'C';
     }
    else if( percentage >= 50){
         student['percentage'] = percentage;
         student['grade'] = 'D';
     }
     else if(percentage < 50){
         student['percentage'] = percentage;
         student['grade'] = 'FAIL';
     }

 });


 students.sort((student1, student2) => (student2.percentage > student1.percentage) ? 1 : (student2.percentage < student1.percentage) ? -1 : 0);
 console.log(students);

 students.forEach(student => {
     document.write("Name: ",student.studentName, "<br>");
    document.write("Percentage: ",student.percentage, "<br>");
    document.write("Grade: ",student.grade, "<br>");
    document.write("<hr>")
  });
