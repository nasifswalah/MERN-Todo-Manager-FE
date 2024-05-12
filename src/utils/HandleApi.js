import axios from 'axios';

const baseURL = "http://localhost:5000"

const getAlldata = async (setTodo) => {
   await axios
    .get(baseURL)
    .then(({data}) => {
        console.log(data);
        setTodo(data)
    })
    .catch((error) => console.log(error))
};

const addTodo = async (text, setText, setTodo) => {
    await axios
    .post(`${baseURL}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAlldata(setTodo);
    })
    .catch((error) => console.log(error))
}

const updateTodo = async (todoId, text, setText, setTodo, setIsUpdating) => {
    await axios
    .put(`${baseURL}/update`, { _id: todoId,  text})
    .then((data) => {
        setText("");
        setIsUpdating(false);
        getAlldata(setTodo);
    })
    .catch((error) => console.log(error))
}

const deleteTodo = async (todoId, setTodo) => {
    await axios
    .post(`${baseURL}/delete`, { _id: todoId })
    .then((data) => {
        getAlldata(setTodo);
    })
    .catch((error) => console.log(error))
}

export {getAlldata, addTodo, updateTodo, deleteTodo}