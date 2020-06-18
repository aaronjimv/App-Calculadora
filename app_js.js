function calculadora(n1,op,n2,boton)
{
	var N1=document.getElementById(n1),
		OP=document.getElementById(op),
		N2=document.getElementById(n2),
		BOTON=document.getElementById(boton);

	var	tarea1 = N1.value;
	var cal = OP.value;
	var tarea2 = N2.value;

	var resul = 0;

	if(tarea1 == "" || cal == "" || tarea2 == "")
	{
		alert("Debe completar todos los campos");
	}
	else{

			switch(cal)
			{
				case'*':{ resul= parseFloat(tarea1)*parseFloat(tarea2);
							alert(resul);
							break;
						}
				
				case'+':{ resul= parseFloat(tarea1)+parseFloat(tarea2);
							alert(resul);
							break;
						}
		
				case'-':{ resul= parseFloat(tarea1)-parseFloat(tarea2);
							alert(resul);
							break;
						}
	
				case'/':{ resul=parseFloat(tarea1)/parseFloat(tarea2);
							alert(resul);
							break;
						}
	
				default:{ alert("ingrese una operacion de las indicadas");
							break;
						}
			}
		}
}