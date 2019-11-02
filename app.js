const BASE_URL = "https://hamsahmedansari-todo-server.herokuapp.com";

getTodos = () => {
  try {
    fetch(`${BASE_URL}/todo`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log("Get Todos", result.data);
      });
  } catch (error) {
    console.log("error while getting todos", error);
  }
};

addTodo = () => {
  try {
    const payload = {
      description: "My Name Is Hasnain Ali",
      isDelete: false,
      status: "open",
      title: "Hasnain Todo",
      type: "MJ"
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    };

    fetch(`${BASE_URL}/todo`, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("data", data);
      });
  } catch (error) {
    console.log("error while adding todo", error);
  }
};

// getTodos();
//addTodo();
