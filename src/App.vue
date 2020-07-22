<template>
  <div id="app" class="pb-5">
    <RepositoryInput />

    <template v-if="user.showRepositoryNotFoundMessage">
      <RepositoryNotFoundMessage />
    </template>

    <template v-else>
      <RepositoriesList />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RepositoryInput from "./components/RepositoryInput";
import RepositoriesList from "./components/RepositoriesList";
import RepositoryNotFoundMessage from "./components/RepositoryNotFoundMessage";

export default {
  name: "App",
  components: { RepositoriesList, RepositoryInput, RepositoryNotFoundMessage },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>
