// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  let arr = JSON.parse(localStorage.getItem("scores")) || [];  

  arr.push({ 
    name: nameInput.value,
    score: scoreInput.value,
  });

  localStorage.setItem("scores", JSON.stringify(arr));
  showScores();
}

// Show scores in div
function showScores() {
  let scoresarr = JSON.parse(localStorage.getItem("scores"));
  scores.innerText = "";

  if (!scoresarr || scoresarr.length === 0) {
    scores.innerText = "No scores yet";
    return;
  }

  scoresarr.sort((a, b) => b.score - a.score);
	
  let table = document.createElement('table');
  let th1 = document.createElement('th');
  th1.innerText = 'Name';
  let th2 = document.createElement('th');
  th2.innerText = 'Score';
  
  let tr = document.createElement('tr');
  tr.append(th1, th2);
  table.append(tr);
  
  for (let i = scoresarr.length - 1; i >= 0; i--) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = scoresarr[i].name;

    let td2 = document.createElement("td");
    td2.innerText = scoresarr[i].score;

    tr.append(td1, td2);
    table.append(tr);
  }

  scores.append(table);
}