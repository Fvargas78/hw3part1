$(document).ready(function() {
    $("#score_form").validate({
        rules:
            {
                homework: {required: true, number: true, min: 0, max: 100},
                midterm: {required: true, number: true, min: 0, max: 100},
                final_exam: {required: true, number: true, min: 0, max: 100},
                participation: {required: true, number: true, min: 0, max: 100}
            }
    });
})

function process() {
    if ($("#score_form").valid()) {
        let homework, midterm, final_exam, participation, class_grade;

        homework = parseFloat(document.getElementById("homework").value);
        midterm = parseFloat(document.getElementById("midterm").value);
        final_exam = parseFloat(document.getElementById("final_exam").value);
        participation = parseFloat(document.getElementById("participation").value);
        class_grade = (.5 * homework) + (.2 * midterm) + (.2 * final_exam) + (.1 * participation);
        class_grade = parseInt(class_grade)

        if (class_grade >= 90) {
            document.getElementById("result").value = 'Class score: ' + class_grade + '\nGrade: A';
        }
        else if (class_grade >= 80) {
            document.getElementById("result").value = 'Class score: ' + class_grade + '\nGrade: B';
        }
        else if (class_grade >= 70) {
            document.getElementById("result").value = 'Class score: ' + class_grade + '\nGrade: C';
        }
        else if (class_grade >= 60) {
            document.getElementById("result").value = 'Class score: ' + class_grade + '\nGrade: D' +
            '\nStudent must retake the course.';
        }
        else {
            document.getElementById("result").value = 'Class score: ' + class_grade + '\nGrade: F' +
                '\nStudent must retake the course.';
        }
    }
}
