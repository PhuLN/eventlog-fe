<template>
  <div id="login" class="box is-paddingless">
    <div id="login-header">
        <h3 class="title has-text-light">Welcome back</h3>
    </div>

    <form>
      <div class="field">
        <label class="control field-animation">
          <input v-model="username" class="login-input input" type="text" required autofocus="">
          <div class="label-field has-text-grey">Username</div>
        </label>
      </div>

        <div class="field">
          <label class="control field-animation">
            <input v-model="password" class="login-input input" type="password" required>
            <div class="label-field has-text-grey">Password</div>
          </label>
        </div>
    </form>

    <div id="login-btn-container">
      <button @click="attemptLogin()" id="login-btn" class="button is-primary">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    attemptLogin() {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
form {
  padding: 20px;
}

#login {
  background-color: #343647;
  border-radius: 5px;
}

#login-btn {
  margin: auto;
  width: 100%;
  height: 100%;
  outline: 0;
  font-size: 1.25rem;

  &::-moz-focus-inner {
    border: 0;
  }
}
#login-header {
    background-color: #2a2c3a;
    padding: 10px;
    border-radius: 5px 5px 0 0;
}

#login-form {
  padding: 20px;
}

#login-btn-container {
  margin-top: 50px;
  height: 60px;
}


/* Animated fields */
label {
    color: white;
    display: block;
    padding-top: 30px;
    text-align: center;

    .label-field {
      cursor: text;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 3px;
      text-transform: uppercase;
      transform: translateY(-30px);
      transition: all 0.3s;
    }
}

.login-input {
  max-width: 65%;
  transition: all 0.3s;
  text-align: center;
  border-radius: 0;
  font-size: 25px !important;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid grey;
  color: whitesmoke;
  box-shadow: none;

  &:focus {
    max-width: 100%;
    border-bottom: 1px solid whitesmoke;

    +.label-field {
      transform: translateY(-65px);
      font-size: 12px;
      color: whitesmoke !important;
    }
  }
  &:hover {
    border-bottom: 1px solid whitesmoke;
  }
}

.field-animation {
    display: block;
    text-align: center;

    &.label-field {
      cursor: text;
      font-size: 15px;
      line-height: 20px;
      text-transform: uppercase;
      transform: translateY(-30px);
      transition: all 0.3s;
    }
}

.login-input:valid + .label-field {
  font-size: 12px;
  transform: translateY(-65px);
}
</style>

