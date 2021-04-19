import axios from "axios";

const api_url = "http://localhost:3000/api/v1/todos";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};
// 'fetchTodos',
// 'deleteTodo',
// 'updateTodo'
// 'addTodo'
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get(api_url);
    commit("setTodos", res.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(api_url + `/${id}`);
    commit("removeTodo", id);
  },

  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const res = await axios.get(api_url + `?_limit=${limit}`);
    commit("setTodos", res.data);
  },

  async updateTodo({ commit }, updatedTodo) {
    const res = await axios.put(api_url + `/${updatedTodo.id}`, updatedTodo);
    commit("setUpdateTodo", res.data);
  },

  async addTodo({ commit }, title) {
    const res = await axios.post(api_url, {
      todo: {
        title,
        completed: false,
      },
    });
    commit("newTodo", res.data);
  },
};

const mutations = {
  newTodo: (state, todo) => state.todos.unshift(todo),
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  setUpdateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
