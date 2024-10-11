let path = "https://jsonplaceholder.typicode.com/todos";

async function getDataFromServer() {
  try {
    const serverResponse = await fetch(path);
    const saveDataFromServerResponse = await serverResponse.json();
  } catch (error) {
    console.log(error);
  }
}

async function saveDataFromServer() {
  try {
    let obj = {id: 200,title: "First Title",completed: false,};
    let jsonString = JSON.stringify(obj);
    let methodObj = {method: "POST",headers: {"Content-Type": "application/json",},body: jsonString };
    const serverResponse = await fetch(path,methodObj);
    const saveDataFromServerResponse = await serverResponse.json();
  } catch (error) {
    console.log(error);
  }
}

async function updateFromServer() {
    try {
        let obj = {
            id: 200,
            title: "First Title Updated",
            completed: false,
          };
          let jsonString = JSON.stringify(obj);
          let methodObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonString,
          };
          const serverResponse = await fetch(path + "/" + obj.id, methodObj)
          const saveDataFromServerResponse = await serverResponse.json();
    } catch (error) {
        console.log(error)
    }
}

async function deleteFromserver() {
    try {
        const serverResponse = await fetch(path + "/" + 200, { method: "DELETE" })
        const saveDataFromServerResponse = await serverResponse.json();
        console.log(saveDataFromServerResponse);
    } catch (error) {
        console.error(error);   
    }
}

deleteFromserver();