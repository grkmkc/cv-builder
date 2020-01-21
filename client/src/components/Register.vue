<template>
  <div class="register">
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form action="#!" method="POST" id="register-form">
          <h1>Sign up</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use form </span>
          <div class="sign-up-wrapper">
            <input type="name" name="name" v-model="name" placeholder="name" />
            <input
              type="lastname"
              name="lastname"
              v-model="lastname"
              placeholder="lastname"
            />
          </div>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
          />
           <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
           </p>
          <button type="button" @click="handleRegister()">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Register',
  props: {},
  static: {},
  data() {
    // create data.
    return {
      errors: [],
      name: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  components: {},

  beforeCreate() {},
  created() {},
  async mounted() {},
  methods: {
    handleRegister: async function() {
    
    this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.lastname) {
        this.errors.push('Lastname required.');
      }
       if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }

      let data = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      console.log(this.errors)
      if (this.errors.length < 1) {
         let msg = ''
          await axios
                    .post(`/api/register`, {
                      data
                    })
                    .then(function(response) {
                      console.log(response);
                      msg = response.data.message;
                    })
                    .catch(function(error) {
                      console.log(error);
                    });
         
          const alert = ` <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
           <strong> ${msg} </strong>
          </div>`;
          document.getElementById('register-form').insertAdjacentHTML('afterbegin', alert)
         this.name = '';
         this.lastname = '';
         this.email = '';
         this.password = '';
      }
      
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang="css" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: -webkit-fill-available;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 384px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-up-container {
  left: 0;
  width: 100%;
  z-index: 2;
}
.sign-up-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sign-up-wrapper > input {
  width: 40% !important;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>
