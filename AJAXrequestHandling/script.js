// FUNCTION

function loadData() {

    // CREATE REQUEST OBJECT

    let xhr = new XMLHttpRequest();

    // OPEN GET REQUEST

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users/1",
        true
    );

    // RESPONSE HANDLER

    xhr.onload = function () {

        if (xhr.status == 200) {

            // CONVERT JSON STRING TO OBJECT

            let user =
                JSON.parse(xhr.responseText);

            // DISPLAY DATA

            document.getElementById("output")
                .innerHTML =

                "Name: " + user.name +
                "<br>Email: " + user.email;

        }

    };

    // SEND REQUEST

    xhr.send();

}