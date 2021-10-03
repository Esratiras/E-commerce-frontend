<template>
  <div class="main">

    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content">
          <form method="POST" id="signup-form" class="signup-form">
            <div class="form-group">
              <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
              <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
            </div>
            <div class="form-group">
              <input type="submit" name="submit" id="submit" class="form-submit" value="Sign in" @click="login"/>
            </div>
          </form>
          <p class="loginhere">
            Don't you have a account ? <a href="#" class="loginhere-link">Sign up here</a>
          </p>
        </div>
      </div>
    </section>

  </div>

</template>
<script>
import '../../assets/style.css'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
  },
  computed: {},
  methods: {
    ...mapActions({
      login:"login"
    })
  }
}

</script>
<style scoped>
@import '../../assets/style.css';

</style>
