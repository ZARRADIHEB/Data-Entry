function displayData()
{
  let name = document.getElementById("name").value;
  let color = document.getElementById("color").value;

  let nameInput = document.getElementById("outputName").innerText=('The Name you choose is : ' + name)
  let colorInput = document.getElementById('outputColor').innerText=('The Favorite Color you choose is : ' + color)
  
  
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    displayData();
  }
});
