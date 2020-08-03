
const progressBar = document.getElementById("my-progress-bar");
console.log(progressBar);
let progressvalue = 0;
const button1 = document.querySelector('.j-btn-1');
const button2 = document.querySelector('.j-btn-2');
const button3 = document.querySelector('.j-btn-3');
$(button1).click(function(){
	progressvalue +=1; 
	progressBar.style.width = progressvalue + '%'
});
$(button2).click(function(){
	progressvalue +=3;  
	progressBar.style.width = progressvalue + '%'
});
$(button3).click(function(){
	progressvalue +=7; 
	progressBar.style.width = progressvalue + '%'
});

