// script.js
var button0 = document.getElementById('box0Button');
button0.addEventListener('click', function() {
  console.log('Button clicked!');
  box0Node = document.getElementById('box0')
  box0Node.style.backgroundColor = 'white'
var button1 = document.getElementById('box1Button');
button1.addEventListener('click', function () {
    console.log('Why are you doing this!');
    box1Node = document.getElementById('box1')
    box1Node.style.backgroundColor = 'white';
var button2 = document.getElementById('box2Button')
button2.addEventListener('click', function() {
    console.log('You are killing us!!')
    box2Node = document.getElementById('box2')
    box2Node.style.backgroundColor = 'white'
})
})
});

document.getElementById("submit1").onclick = function() {
  var userName = document.getElementById("username");
  var passwordText = document.getElementById('password')
  if (userName.value == "Inci" && passwordText.value == "16/12/21" || passwordText.value == '16.12.21' ) {
    alert("I love You <3")
  }
  else {
  alert(userName.value + ", " + passwordText.value);
}}



