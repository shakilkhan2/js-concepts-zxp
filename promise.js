document.getElementById("loadData").addEventListener("click", function() {
    // Create a new promise
    const fetchDataPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "promise.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText); // Resolve the promise with the response text
                } else {
                    reject("Failed to fetch data"); // Reject the promise with an error message
                }
            }
        };
        xhr.send();
    });

    // Use the promise
    fetchDataPromise
        .then(data => {
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = "Fetched Data: " + data;
        })
        .catch(error => {
            console.error(error);
        });
});
