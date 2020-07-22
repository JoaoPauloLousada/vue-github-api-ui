import GithubUser from "../../services/api/github/user";

const userModule = {
  state: {
    userName: "",
    userRepositories: [],
    showRepositoryNotFoundMessage: false,
  },
  mutations: {
    updateUserName(state, payload) {
      state.userName = payload.userName;
    },
    updateUserRepositories(state, payload) {
      state.userRepositories = payload.userRepositories;
    },
    updateShowRepositoryNotFoundMessage(state, payload) {
      state.showRepositoryNotFoundMessage =
        payload.showRepositoryNotFoundMessage;
    },
  },
  actions: {
    async findRepositories({ commit, state }) {
      const githubUser = new GithubUser(state.userName);
      const repositories = await githubUser.getRepositories();

      if (repositories.message === "Not Found") {
        commit("updateUserRepositories", {
          userRepositories: [],
        });
        commit("updateShowRepositoryNotFoundMessage", {
          showRepositoryNotFoundMessage: true,
        });
      } else {
        commit("updateUserRepositories", {
          userRepositories: repositories,
        });
        commit("updateShowRepositoryNotFoundMessage", {
          showRepositoryNotFoundMessage: false,
        });
      }
    },
  },
};

export default userModule;
