var scorep = 0;
var scoreai = 0;

var img1 = document.getElementById("ai");
img1.setAttribute("style", "width: 100px;");

var img11 = document.getElementById("user");
img11.setAttribute("style", "width: 100px;");

function fun1() {
    
          var arr = ["pierre", "feuille", "ciseaux"];
          
          var i = arr[Math.floor(Math.random() * arr.length)];
    
          if (i == arr[0]) {
              document.getElementById('ai').setAttribute("src", "stone.png");
              document.getElementById('ai').setAttribute("alt", "stone");
              document.getElementById('user').setAttribute("src", "stone.png");
              document.getElementById('user').setAttribute("alt", "stone");
              document.getElementById('demo').innerHTML = ("Same ! &#x1F61C");
          } 
    else if (i == arr[1]) {
              document.getElementById('ai').setAttribute("src", "paper.png");
              document.getElementById('ai').setAttribute("alt", "paper");
              document.getElementById('user').setAttribute("src", "stone.png");
              document.getElementById('user').setAttribute("alt", "stone");
              document.getElementById('demo').innerHTML = ("Loose ! &#x1F4A5");
              ++scoreai; document.getElementById('scoreai').innerHTML = scoreai;
          } 
    else if (i == arr[2]) {
               document.getElementById('ai').setAttribute("src", "scissors.png");
              document.getElementById('ai').setAttribute("alt", "scissors");
              document.getElementById('user').setAttribute("src", "stone.png");
              document.getElementById('user').setAttribute("alt", "stone");
              document.getElementById('demo').innerHTML = ("Win ! &#x1F389;");
             ++scorep; document.getElementById('scorep').innerHTML = scorep;
          }
      }
function fun2() {
    
          var arr = ["pierre", "feuille", "ciseaux"];
          
          var i = arr[Math.floor(Math.random() * arr.length)];
    
          if (i == arr[1]) {
              document.getElementById('ai').setAttribute ("src", "paper.png");
              document.getElementById('ai').setAttribute("alt", "paper");
              document.getElementById('user').setAttribute("src", "paper.png");
              document.getElementById('user').setAttribute("alt", "paper");
              document.getElementById('demo').innerHTML = ("Same ! &#x1F61C");
          } 
    else if (i == arr[2]) {
              document.getElementById('ai').setAttribute("src", "scissors.png");
              document.getElementById('ai').setAttribute("alt", "scissors");
              document.getElementById('user').setAttribute("src", "paper.png");
              document.getElementById('user').setAttribute("alt", "paper");
              document.getElementById('demo').innerHTML = ("Loose ! &#x1F4A5");
              ++scoreai; document.getElementById('scoreai').innerHTML = scoreai;
          } 
    else if (i == arr[0]) {
              document.getElementById('ai').setAttribute("src", "stone.png");
              document.getElementById('ai').setAttribute("alt", "stone");
              document.getElementById('user').setAttribute("src", "paper.png");
              document.getElementById('user').setAttribute("alt", "paper");
              document.getElementById('demo').innerHTML = ("Win ! &#x1F389;");
             ++scorep; document.getElementById('scorep').innerHTML = scorep;
          }
      }
function fun3() {
          var arr = ["pierre", "feuille", "ciseaux"];
          
          var i = arr[Math.floor(Math.random() * arr.length)];
    
          if (i == arr[2]) {
              document.getElementById('ai').setAttribute("src", "scissors.png");
              document.getElementById('ai').setAttribute("alt", "scissors");
              document.getElementById('user').setAttribute("src", "scissors.png");
              document.getElementById('user').setAttribute("alt", "scissors");
              document.getElementById('demo').innerHTML = ("Same ! &#x1F61C");
          } 
    else if (i == arr[0]) {
              document.getElementById('ai').setAttribute("src", "stone.png");
              document.getElementById('ai').setAttribute("alt", "stone");
              document.getElementById('user').setAttribute("src", "scissors.png");
              document.getElementById('user').setAttribute("alt", "scissors");
              document.getElementById('demo').innerHTML = ("Loose ! &#x1F4A5");
              ++scoreai; document.getElementById('scoreai').innerHTML = scoreai;
          } 
    else if (i == arr[1]) {
              document.getElementById('ai').setAttribute("src", "paper.png");
              document.getElementById('ai').setAttribute("alt", "paper");
              document.getElementById('user').setAttribute("src", "scissors.png");
              document.getElementById('user').setAttribute("alt", "scissors");
              document.getElementById('demo').innerHTML = ("Win ! &#x1F389;");
             ++scorep; document.getElementById('scorep').innerHTML = scorep;
          }
      }
function change1() { document.getElementById('user').animate([
       { transform: 'scale(0)' },
       { transform: 'scale(1)' }], {
       duration: 280,
   });
   document.getElementById('ai').animate([
       { transform: 'scale(0)' },
       { transform: 'scale(1)' }], {
       duration: 280,
   });
   document.getElementById('demo').animate([
       { transform: 'scale(0.5)' },
       { transform: 'scale(1)' }], {
       duration: 280,
   });
                      }