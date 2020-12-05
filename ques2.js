function final(){
	radius = document.getElementById("radius").value
	var a = calcCircumfrence(radius)
	result.innerHTML = `<p>The circumference is ${Math.round(a)} </p>`
}

function calcCircumfrence(radius) {
  return Math.PI *radius* 2;
}