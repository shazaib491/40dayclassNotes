let path = "https://jsonplaceholder.typicode.com/todos";

async function getDataFromServer() {
  try {
    let response=await axios.get(path)
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}


// getDataFromServer();
async function saveDataFromServer() {
  try {
    let obj = {id: 200,title: "First Title",completed: false,};
    const serverResponse = await axios.post(path,obj);
    console.log(serverResponse.data);
  } catch (error) {
    console.log(error);
  }
}

// saveDataFromServer();

async function updateFromServer() {
    try {
        let obj = {
            id: 200,
            title: "First Title Updated",
            completed: false,
          };
          const serverResponse = await axios.put(path + "/" + obj.id, obj)
          console.log(serverResponse.data);
    } catch (error) {
        console.log(error)
    }
}

// updateFromServer();

async function deleteFromserver() {
    try {
        const serverResponse = await axios.delete(path + "/" + 200)
        console.log(serverResponse.data);
    } catch (error) {
        console.error(error);   
    }
}

deleteFromserver();