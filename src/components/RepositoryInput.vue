<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div>
          <div class="input-group my-3">
            <input
              type="text"
              class="form-control"
              placeholder="User Name"
              v-model="userName"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="findRepositories"
              >
                Find Repositories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: "",
    };
  },
  watch: {
    userName: function(name) {
      this.updateUserName(name);
    },
  },
  methods: {
    updateUserName(userName) {
      this.$store.commit("updateUserName", {
        userName,
      });
    },
    findRepositories() {
      this.$store.dispatch("findRepositories");
    },
  },
};
</script>

<style></style>
