
<template>

  <v-row align="center" justify="center" >




    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
         <div class="text-center p-4">
      <img
        src="/dist/img/saj_logo_64.png"
        alt="SAJ Logo"
        class="brand-image img-circle elevation-3"
      />
      </div>
        <v-toolbar color="primary" dark flat>

          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text >
          <v-form @submit.prevent="login" id="check-login-form">
            <v-text-field
              id="email"
              v-model="account.email"
              label="Login"
              name="login"
              prepend-icon="person"
              type="email"
            />

            <v-text-field
              id="password"
              v-model="account.password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
            />

            <div class="alert alert-danger red--text" v-if="isError">
              <div>"{{errMessage}}"</div>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" form="check-login-form" type="submit" :loading="loginLoad">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>




<!--

<template>
<body class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <img
        src="/dist/img/saj_logo_64.png"
        alt="SAJ Logo"
        class="brand-image img-circle elevation-3"
      />
      <br />
      <br />
      <a href="/">
        <b>SAJ</b>Water Monitoring
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form @submit.prevent="login" id="check-login-form">
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email"  id="email" name="login"  v-model="account.email" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" id="password"  v-model="account.password" name="password"   />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember">Remember Me</label>
              </div>
            </div> -->
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block" form="check-login-form" :loading="loginLoad">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </form>



        <!-- /.social-auth-links -->

        <!-- <p class="mb-1">
          <a href="#">I forgot my password</a>
        </p> -->
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->
</body>
</template>







-->






<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    account: {
      email: '',
      password: ''
    },
    isError: false,
    errMessage: ''
  }),
  methods: {
    login() {
      this.$store
        .dispatch('users/login', this.account)
        .then(() => {
          this.$router.push({ path: '/protected' })
        })
        .catch(error => {
          this.isError = true
          this.errMessage = error
        })
    }
  },
  components: {},
  computed: {
    ...mapGetters({ loginLoad: 'users/loadingLogin' })
  }
}
</script>
