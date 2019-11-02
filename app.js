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

getTodos();
