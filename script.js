/* Rock Paper Sissor Game */
/* Develop by @ebreyaue */
/* github.com/ebreyaue/rps */


/*--------------------------*/

let uc=0;
let mc=0;
let vc=0;

function about()
{
alert("Develop by @ebreyaue https://github.com/ebreyaue");
}

function computer_choose(max, min)
{
return Math.floor(Math.random()*(max-min+min)+min);
}


function choose_object(oe,user)
  {
      user=user+" Chosed ";
      
      if(oe==1)
      {
	  alert(user + "Rock");
      }  
      else if(oe==2)
      {
	  alert(user + "Paper");
      }
      else if(oe==3)
      {
	alert(user + "Scissor");
      }
      else
      {
	alert("Not Chosed");
      }
      
  }


function define_result(uc,mc)
{

  if(uc == mc)
  {
  return 0;
  }

  
  else
  {
      if(uc == 1 && mc == 3 || uc == 2 && mc == 1 || uc == 3 && mc == 2)
      {
	  return 1;
      }
      
      else
      {
	  return -1;
	  }

  }
  
  }
  
function start_game()
{
let result=0;
let uc=0;
let le=0; //lose
let wn=0; //win

while(wn < 3) // while you win 3 times the game not end.

//&& le < 3) // while the computer not lost 3,the game not end too.

{
mc=computer_choose(3,1);
uc=prompt("What do you choose? (1:Rock, 2:Paper, 3:Scissor");
result = define_result(uc,mc);

if (result == 0)
{
alert("Tie");	
}

else if(result < 0)
{
alert("You Lose");
le++;
}

else
{
alert("You Win");
wn++;
}

choose_object(uc,"User");
choose_object(mc,"Computer");
} 

//end of while

//show who chosed each one.
alert("User Won: "+wn+" Times and Lost: "+le+" Times");
}
