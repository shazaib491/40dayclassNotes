let path = "https://jsonplaceholder.typicode.com/todos";

function getDataFromServer() {
  fetch(path, { method: "GET" })
    .then((data) => {
      console.log(data);
      data
        .json()
        .then((JsonObj) => {
          console.log(JsonObj);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

function saveDataFromServer() {
  let obj = {
    id: 200,
    title: "First Title",
    completed: false,
  };
  let jsonString = JSON.stringify(obj);
  let methodObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,

  };
  fetch(path, methodObj)
    .then((successResponse) => {
      successResponse
        .json()
        .then((JsonObj) => {
          console.log(JsonObj);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
}

function updateFromServer() {
  let obj = {
    id: 200,
    title: "First Title Updated",
    completed:false,
  };
  let jsonString = JSON.stringify(obj);
  let methodObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,

  };
//   https://json-server.com/api/todo/200
  fetch(path + "/" + obj.id, methodObj)
    .then((successResponse) => {
      successResponse
        .json()
        .then((dataResponse) => {
          console.log(dataResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteFromserver(){
    fetch(path + "/" + 195,{method: "DELETE"})
    .then((successResponse) => {
      successResponse
        .json()
        .then((dataResponse) => {
          console.log(dataResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
