
//create dom elements
var document_body = document.body;

//create main container
var container = document.createElement("div");
container.setAttribute("class","container");

//quiz info section
var info = document.createElement("div");
info.setAttribute("class","row");

//left
var left = document.createElement("div");
left.setAttribute("class","col-md-6");

var h4 = document.createElement("h4");
h4.innerHTML = "QUESTION";

var ques_num = document.createElement("div");
ques_num.setAttribute("id","progressText");
ques_num.innerHTML = "1/10";

left.append(h4, ques_num);

//right
var right = document.createElement("div");
right.setAttribute("class","col-md-6");
right.setAttribute("style","text-align:right");

var score_label = document.createElement("p");
score_label.innerHTML = "SCORE";

var score = document.createElement("p");
score.setAttribute("id","score");
score.innerHTML = 0;

right.append(score_label, score);

//append left and right content to info
info.append(left, right);

//quiz_body section
var quiz_body = document.createElement("div");
quiz_body.setAttribute("class","row");

//question
var h2 = document.createElement("h2");
h2.setAttribute("id","question");


//choice 1	
var choice_cont_1 = document.createElement("div");
choice_cont_1.setAttribute("class","choice-container");

var p1 = document.createElement("div");
p1.setAttribute("class","choice-prefix");
p1.innerHTML = 'A';

var p2 = document.createElement("div");
p2.setAttribute("class","choice-text");
p2.setAttribute("id","choice1");

choice_cont_1.append(p1, p2);

//choice 2
var choice_cont_2 = document.createElement("div");
choice_cont_2.setAttribute("class","choice-container");

var p1 = document.createElement("div");
p1.setAttribute("class","choice-prefix");
p1.innerHTML = 'B';

var p2 = document.createElement("div");
p2.setAttribute("class","choice-text");
p2.setAttribute("id","choice2");

choice_cont_2.append(p1, p2);

//choice 3
var choice_cont_3 = document.createElement("div");
choice_cont_3.setAttribute("class","choice-container");

var p1 = document.createElement("div");
p1.setAttribute("class","choice-prefix");
p1.innerHTML = 'C';

var p2 = document.createElement("div");
p2.setAttribute("class","choice-text");
p2.setAttribute("id","choice3");

choice_cont_3.append(p1, p2);

//choice 4
var choice_cont_4 = document.createElement("div");
choice_cont_4.setAttribute("class","choice-container");

var p1 = document.createElement("div");
p1.setAttribute("class","choice-prefix");
p1.innerHTML = 'D';

var p2 = document.createElement("div");
p2.setAttribute("class","choice-text");
p2.setAttribute("id","choice4");

choice_cont_4.append(p1, p2);

quiz_body.append(h2, choice_cont_1, choice_cont_2, choice_cont_3, choice_cont_4 );

//append elements to the container
container.append(info, quiz_body);

document_body.append(container);



var correct_ans;
var data;
var ques = 1;
var correct = 0;
var score = 0;
async function getapi(){
const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
data = await response.json();
var ans = data['results'][0]['incorrect_answers'];
correct_ans = data['results'][0]['correct_answer']
console.log(correct_ans);
ans.push(data['results'][0]['correct_answer']);
ans.sort(function() {
  return .5 - Math.random();
});
console.log(ans);
document.getElementById("question").innerHTML = data['results'][0]['question'];
document.getElementById("choice1").innerHTML = ans[0];
document.getElementById("choice2").innerHTML = ans[1];
document.getElementById("choice3").innerHTML = ans[2];
document.getElementById("choice4").innerHTML = ans[3];

return data;
}

getapi();



 var user_ans
[...document.querySelectorAll('.choice-text')].forEach(function(item) {
  item.addEventListener('click', function() {
	
	
	  
    user_ans = this.innerText;
	if(user_ans == correct_ans)
	{
		correct++;
		console.log(correct);
		 score = correct * 10;
	}
  localStorage.setItem('Score', score);
 console.log(  localStorage.getItem('Score'));
console.log(ques);

if(ques == 10)
{
	return window.location.assign('end.html');
}
			var ans = data['results'][ques]['incorrect_answers'];
			correct_ans = data['results'][ques]['correct_answer'];
			console.log(correct_ans);

			ans.push(data['results'][ques]['correct_answer']);
			ans.sort(function() {
			  return .5 - Math.random();
			});
		
		document.getElementById("question").innerHTML = data['results'][ques]['question'];
		document.getElementById("choice1").innerHTML = ans[0];
		document.getElementById("choice2").innerHTML = ans[1];
		document.getElementById("choice3").innerHTML = ans[2];
		document.getElementById("choice4").innerHTML = ans[3];
		
		ques++;
		document.getElementById("progressText").innerHTML = ques+'/10';
		document.getElementById("score").innerHTML = score;
  
    });
   });
