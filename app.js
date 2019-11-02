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

updateTodo = () => {
  const updatedId = "5dbd8b2cd37f110024cb9da2";
  const payload = {
    date: "17-05-1995 12:00AM",
    description: "I love Javascript",
    isDelete: false,
    status: "done",
    title: "JavaScript",
    type: "JS"
  };

  const options = {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  try {
    fetch(`${BASE_URL}/todo/${updatedId}`, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("data", data);
      });
  } catch (error) {
    console.log("error while updating todo", error);
  }
};

deleteTodo = () => {
  const deletedId = "5dbd8b2cd37f110024cb9da2";
  const options = {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  };
  try {
    fetch(`${BASE_URL}/todo/${deletedId}`, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  } catch (error) {
    console.log("error while deleting todo", error);
  }
};

// getTodos();
//addTodo();
// updateTodo();
//deleteTodo();
