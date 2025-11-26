// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
	let obj = {}; 
	
	obj["name"] = nameInput.value; 
	obj["score"] = scoreInput.value;
	localStorage.setItem("scores",JSON.stringify(obj));
  showScores();
}

// Show scores in div
function showScores() {
	scores.innerText = "";
  let table = document.createElement('table');
	let th1 = document.createElement('th');
	th1.innerText = 'Name';
	let th2 = document.createElement('th');
	th2.innerText = 'Score';
	
	let tr = document.createElement('tr');
	tr.append(th1,th2);
	table.append(tr);

	let score = JSON.parse(localStorage.getItem('scores'))
	
	if(score){
		let td1 = document.createElement('td');
		td1.innerText = score.name;
		let td2 = document.createElement('td');
		td2.innerText = score.score;
		let tr = document.createElement('tr');
		tr.append(td1,td2);
		table.append(tr);
	}
	scores.append(table);
}
