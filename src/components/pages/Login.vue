<template>
    <div>
         <form class="form-signin" @submit.prevent="login" >
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <label for="inputEmail" class="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="user.username">
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="user .password">
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
  </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            user:{
                username:'',
                psssword:'',
            }
        }
    },
    methods:{
        login(){
            const api = 'https://vue-course-api.hexschool.io/admin/signin'
            const vm = this;
            this.$http.post(api,vm.user).then((response) =>{
                console.log(response.data);
                if(response.data.success){
                  vm.$router.push('/');
                }
            })
        }
    }
}
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


</style>