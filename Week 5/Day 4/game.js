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
		document.getElementById("ques_num").innerHTML = ques+'/10';
		document.getElementById("score").innerHTML = score;
  
    });
   });