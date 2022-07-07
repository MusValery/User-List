<template>
  <form class="wrapper">
    <div class="wrapper__login">
      <Input
        :value="userName"
        :placeholder="'Login'"
        :id="1"
        @input="changeUserName"
      />
      <div v-if="emailError.length">
        <span v-for="error in emailError" :key="error.id" class="errors">{{
          error
        }}</span>
      </div>
    </div>
    <div class="wrapper__login">
      <Input
        :value="password"
        :placeholder="'Password'"
        :id="2"
        @input="changeUserPassword"
      />
      <div v-if="passError.length">
        <span v-for="error in passError" :key="error.id" class="errors">{{
          error
        }}</span>
      </div>
    </div>
    <button @click.prevent="singIn" @click="checkForm" class="btn_enter">
      Enter
    </button>
    <div v-if="!isLoader" class="main_table">
      <UserTable :mainTable="mainTable" />
    </div>
    <div v-else>
      <Loader />
    </div>
  </form>
</template>

<script>
import Input from "@/elements/Inputs/Input.vue";
import UserTable from "@/elements/UserTable/UserTable.vue";
import loginRequest from "@/api/services.js";
import Loader from "@/elements/Loader/Loader.vue";

export default {
  name: "App",
  components: { Input, UserTable, Loader },
  data() {
    return {
      userName: "",
      password: "",
      passError: "",
      emailError: "",
      isLoader: false,
      mainTable: {},
    };
  },

  methods: {
    async singIn() {
      let response = await loginRequest(this.userName, this.password);
      this.mainTable = response.user_list;
      console.log(this.mainTable, response.user_list);
    },
    changeUserName(name) {
      this.userName = name;
    },
    changeUserPassword(pass) {
      this.password = pass;
    },
    checkForm(e) {
      if (!this.userName) {
        this.emailError = "Name required";
      } else if (this.userName.length < 15) {
        this.emailError = "Name must be 15 characters";
      } else if (this.userName !== "proves_frontend") {
        this.emailError = "Invalid email";
      } else {
        this.emailError = "";
      }

      if (!this.password) {
        this.passError = "Password required";
      } else if (this.password.length < 9) {
        this.passError = "Password must be 15 characters";
      } else if (this.password !== "prova1234") {
        this.passError = "Invalid password";
      } else {
        this.passError = "";
      }
      e.preventDefault();
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  gap: 20px

.btn_enter
  padding: 5px
  border-radius: 8px
  min-width: 85px
  cursor: pointer
  background-color: #0000

.btn_enter:hover
  background-color: #FFFAFA
  border: 1px solid #4682B4

.container_table
  display: flex
  justify-content: center
  flex-direction: row
  gap: 20px
  border: 1px solid
  padding: 20px
  border-radius: 5px

.main_table
  margin-top: 30px  

.errors
  color: #FF3333
  font-size: 12px
</style>
