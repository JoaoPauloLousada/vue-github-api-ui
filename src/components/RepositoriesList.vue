<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Repositories List</h2>
        <div>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="item in $store.state.user.userRepositories"
              :key="item.id"
            >
              <div class="py-2">
                <span class="font-weight-bold pr-3">Repository Url:</span
                ><span>{{ item.url }}</span>
              </div>
              <div class="py-2">
                <span class="font-weight-bold pr-3">Repository Language:</span
                ><span>{{ item.language }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
