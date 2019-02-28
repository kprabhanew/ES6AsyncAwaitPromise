
var displayDiv = document.getElementById("displayDiv");

// Part 1 - Create a function that returns a promise
function getJsonAsync(url) {
    // Promises require two functions: one for success, one for failure
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = () => {
            if (xhr.status === 200) {
                // We can resolve the promise
                resolve(xhr.response);
            } else {
                // It's a failure, so let's reject the promise
                reject("Unable to load Data");
            }
        }

        xhr.onerror = () => {
            // It's a failure, so let's reject the promise
            reject("Unable to load Data");
        };

        xhr.send();
    });
}

// Part 2 - The function returns a promise
// so we can chain with a .then and a .catch
getJsonAsync("https://jsonplaceholder.typicode.com/todos/").then(json => {
    var result = JSON.parse(json);
    //var result = json;

    result.forEach((card) => {
        var div = document.createElement("div");
        div.innerHTML = `${card.id}  - cost is -  ${card.title}`;

        displayDiv.appendChild(div);
    });
}).catch(error => {
    displayDiv.innerHTML = error;
});