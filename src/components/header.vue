<template>
  <!-- ==== header start ==== -->
  <header class="header">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="assets/images/logo.png" alt="Logo" class="logo" />
        </a>
        <div class="navbar__out order-2 order-xl-3">
          <div class="nav__group__btn">
            <a href="login.html" class="log d-none d-sm-block"> Log In </a>
            <a href="registration.html" class="button button--effect d-none d-sm-block">
              Join Now <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#primaryNav"
            aria-controls="primaryNav"
            aria-expanded="false"
            aria-label="Toggle Primary Nav"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse order-3 order-xl-2" id="primaryNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
            </li>

            <li class="nav-item">
             
                <router-link class="nav-link" :to="{ name: 'properties' }"> Properties </router-link>
            
            </li>


            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'listProperties'}">property List</router-link>
            
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'about_us'}">About Us</router-link>
             
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'career'}">Career</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
             
            </li>

            <li class="nav-item d-block d-sm-none">
              <a href="registration.html" class="button button--effect button--last"
                >Join Now <i class="fa-solid fa-arrow-right-long"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- ==== #header end ==== -->
</template>

<script>
export default {
  name: "HeaderView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
