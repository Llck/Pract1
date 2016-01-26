var i
for (i=1; i<=100; i++)
{
	if (i%3) {console.log("Fiz")} 
		else
			if (i%5) {console.log("Buzz")}
		else
			if (i%15) {console.log("FizzBuzz")}
		else {console.log(i)}
}