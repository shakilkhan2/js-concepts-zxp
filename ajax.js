document.getElementById("loadData").addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

  xhr.open("GET", "data.json", true); // Specify the request type and URL
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText); // Parse the response JSON
      var resultElement = document.getElementById("result");
      console.log(resultElement);
      // Update the result element with fetched data
      resultElement.innerHTML = "Name: " + data.name + "<br>Age: " + data.age;
    }
  };

  xhr.send(); // Send the request
});
