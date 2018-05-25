//alert("connect");
var chks = document.querySelector("#tbl");
chks.classList.add("changecolor");

var t11 = document.querySelector("#t1");
var t12 = document.querySelector("#t2");
var t13 = document.querySelector("#t3");
var t21 = document.querySelector("#t4");
var t22 = document.querySelector("#t5");
var t23 = document.querySelector("#t6");
var t31 = document.querySelector("#t7");
var t32 = document.querySelector("#t8");
var t33 = document.querySelector("#t9");
var chg = document.querySelector("#h2");
var i=1;
function check() {

	 t11 = document.querySelector("#t1");
	 t12 = document.querySelector("#t2");
	 t13 = document.querySelector("#t3");
	 t21 = document.querySelector("#t4");
	 t22 = document.querySelector("#t5");
	 t23 = document.querySelector("#t6");
	 t31 = document.querySelector("#t7");
	 t32 = document.querySelector("#t8");
	 t33 = document.querySelector("#t9");
	 

	if (   t11.innerHTML == "X" && t12.innerHTML == "X" && t13.innerHTML == "X" 
		|| t21.innerHTML == "X" && t22.innerHTML == "X" && t23.innerHTML == "X"
		|| t31.innerHTML == "X" && t32.innerHTML == "X" && t33.innerHTML == "X"
		|| t11.innerHTML == "X" && t21.innerHTML == "X" && t31.innerHTML == "X"
		|| t12.innerHTML == "X" && t22.innerHTML == "X" && t32.innerHTML == "X"
		|| t13.innerHTML == "X" && t23.innerHTML == "X" && t33.innerHTML == "X"
		|| t11.innerHTML == "X" && t22.innerHTML == "X" && t33.innerHTML == "X"
		|| t13.innerHTML == "X" && t22.innerHTML == "X" && t31.innerHTML == "X"
 		)
		{
			return 'X';
		}

	if (   t11.innerHTML == "O" && t12.innerHTML == "O" && t13.innerHTML == "O"
		|| t21.innerHTML == "O" && t22.innerHTML == "O" && t23.innerHTML == "O"
		|| t31.innerHTML == "O" && t32.innerHTML == "O" && t33.innerHTML == "O"
		|| t11.innerHTML == "O" && t21.innerHTML == "O" && t31.innerHTML == "O"
		|| t12.innerHTML == "O" && t22.innerHTML == "O" && t32.innerHTML == "O"
		|| t13.innerHTML == "O" && t23.innerHTML == "O" && t33.innerHTML == "O"
		|| t11.innerHTML == "O" && t22.innerHTML == "O" && t33.innerHTML == "O"
		|| t13.innerHTML == "O" && t22.innerHTML == "O" && t31.innerHTML == "O"
	   )
		{
			return 'O';
		}

}
function change(cus){
	console.log(cus);
	if(cus.innerHTML=="")
		{
			if(i%2!=0)
				{
					chg.innerHTML = "O turns";
					cus.innerHTML = "X";
					if(check() == 'X')
						{
							window.alert("X wins");
							location.reload();
						}
				}
			else
				{
					chg.innerHTML = "X turns";
					cus.innerHTML = "O";
					if (check() == 'O') 
						{						
							window.alert("O wins");
							location.reload();
						}
			}
			if(i==9){
				window.alert("Its a tie");
				location.reload();
			}
		console.log(i);
		i++;
	}


}
