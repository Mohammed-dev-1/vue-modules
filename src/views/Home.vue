<template>
  <div class="home">
    <h1>
      Home page
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
      impedit quod voluptatibus maiores provident, perspiciatis laborum.
      Molestias exercitationem quod ut aspernatur nostrum debitis molestiae
      ipsam, dolores assumenda alias quidem.
    </p>

    <div>
      <router-link class="home__link" to="/cart">Cart page</router-link>
      <router-link class="home__link" to="/products">Products page</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "HomeComponent",
  computed: {
    ...mapState([
        'user'
    ])
  }
};
</script>

<style>
  .home {
    padding-top: 60px;
  }
  .home__link {
    color: #ffffff;
    font-weight: bold;
    padding: 20px;
  }
  p {
    padding: 10px;
  }
</style>