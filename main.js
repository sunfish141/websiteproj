function calculateScore() {
  //Input - collect answers

  let q1ans = document.getElementById("q1ans").value;
  let q2ans = document.getElementById("q2ans").value;
  let q3ans = document.getElementById("q3ans").value;
  let q4ans = document.getElementById("q4ans").value;
  let q5ans = document.getElementById("q5ans").value;
  let totalScore = 0;

  //Process - check each answer for correctness

  if (q1ans.toUpperCase() == "NUMBERS") {
    totalScore++;
    document.getElementById("q1ans").style.borderColor = "green";
    document.getElementById("q1response").style.color = "green";
    document.getElementById("q1response").innerHTML = "Correct";
  } else {
    document.getElementById("q1ans").style.borderColor = "red";
    document.getElementById("q1response").style.color = "red";
    document.getElementById("q1response").innerHTML = "Incorrect";
  }

  if (q2ans.toUpperCase() == "TRUE" || q2ans.toUpperCase() == "FALSE") {
    totalScore++;
    document.getElementById("q2ans").style.borderColor = "green";
    document.getElementById("q2response").style.color = "green";
    if (q2ans == "true" || q2ans == "false") {
      document.getElementById("q2response").innerHTML = "Correct";
    } else {
      document.getElementById("q2response").innerHTML =
        "Correct, but remember boolean values are always in lowercase";
    }
  } else {
    document.getElementById("q2ans").style.borderColor = "red";
    document.getElementById("q2response").style.color = "red";
    document.getElementById("q2response").innerHTML = "Incorrect";
  }

  if (q3ans == '""' || q3ans == "''" || q3ans == "``") {
    totalScore++;
    document.getElementById("q3ans").style.borderColor = "green";
    document.getElementById("q3response").style.color = "green";
    document.getElementById("q3response").innerHTML = "Correct";
  } else {
    document.getElementById("q3ans").style.borderColor = "red";
    document.getElementById("q3response").style.color = "red";
    document.getElementById("q3response").innerHTML = "Incorrect";
  }

  if (q4ans.toUpperCase() == "UNDEFINED") {
    totalScore++;
    document.getElementById("q4ans").style.borderColor = "green";
    document.getElementById("q4response").style.color = "green";
    document.getElementById("q4response").innerHTML = "Correct";
  } else {
    document.getElementById("q4ans").style.borderColor = "red";
    document.getElementById("q4response").style.color = "red";
    document.getElementById("q4response").innerHTML = "Incorrect";
  }

  if (q5ans.toUpperCase() == "NULL") {
    totalScore++;
    document.getElementById("q5ans").style.borderColor = "green";
    document.getElementById("q5response").style.color = "green";
    document.getElementById("q5response").innerHTML = "Correct";
  } else {
    document.getElementById("q5ans").style.borderColor = "red";
    document.getElementById("q5response").style.color = "red";
    document.getElementById("q5response").innerHTML = "Incorrect";
  }

  //Output - display grade and encouragement

  let grade = (totalScore / 5) * 100;
  document.getElementById("grade").innerHTML = `Your grade is ${grade}%.`;
  if (grade == 100) {
    document.getElementById("encouragement").innerHTML = "Congratulations!";
  } else if (grade == 80) {
    document.getElementById("encouragement").innerHTML = "Almost there!";
  } else if (grade == 60) {
    document.getElementById("encouragement").innerHTML =
      "Just try a little harder!";
  } else if (grade == 40) {
    document.getElementById("encouragement").innerHTML =
      "Reread the about page, and check your spelling!";
  } else if (grade < 40) {
    document.getElementById("encouragement").innerHTML =
      "All answers can be found in the about page!";
  }
}
