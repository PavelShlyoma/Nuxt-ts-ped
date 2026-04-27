<script setup lang="ts">

const {toggleRegOpen, toggleSwitch} = usePopupController()

</script>

<template>
    <div @click.self="toggleRegOpen" class="log-background">
      <div class="log-container">
        <font-awesome @click="toggleRegOpen" class="log--back" icon="fa-solid fa-xmark"></font-awesome>
        <form @submit="toggleRegOpen" class="log-form" action="">
          <div class="log-form-title">
            Sign up
          </div>
          <label class="log-form-label" for="email">
            Email address
          </label>
          <input placeholder="email@example.com" id="email" checked class="log-inp" type="email">
          <label class="log-form-label" for="password">
            Password
          </label>
          <input placeholder="password" id="password" checked class="log-inp" type="password">
          <input placeholder="confirm password" id="password" checked class="log-inp" type="password">
          <button class="log-form--submit" type="submit">
            Sign up
          </button>
        </form>
        <div class="log-reg-text">
          You have an account?
        </div>
        <button @click="toggleSwitch" class="log-reg--link">
          Sign in here
        </button>
        <div class="log-container-figure"></div>
      </div>
    </div>
</template>

<style scoped>

.log-background {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.log-container {
  background: linear-gradient(90deg,rgba(209, 196, 233, 1) 0%, rgba(209, 196, 255, 1) 100%);
  -webkit-box-shadow: 4px 2px 34px 10px rgba(251, 251, 251, 0.2);
  -moz-box-shadow: 4px 2px 34px 10px rgba(251, 251, 251, 0.2);
  box-shadow: 4px 2px 34px 10px rgba(251, 251, 251, 0.2);
  padding: 40px;
  border-radius: 50px;
  color: black;
  width: 350px;
  margin: 0 auto;
  position: relative;
}

.log-container {
  animation: slideIn 0.5s ease-in-out;
}

.log--back {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 25px;
  right: 25px;
  cursor: pointer;
  color: rgba(63, 95, 149, 0.8);
}

.log-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.log-inp {
  border-radius: 10px;
  padding: 10px;
  max-width: 500px;
  background-color: rgba(209, 196, 233, 0.99);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.log-form-title {
  font-weight: bold;
  font-size: 16px;
  margin: 15px 0 0 15px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
}

.log-form-label {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.log-form--submit {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.6);
}

.log--recover {
  text-align: center;
  display: block;
  margin-top: 30px;
  font-size: 14px;
}

.log-reg-text {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

.log-reg--link {
  font-size: 14px;
  display: block;
  text-align: center;
  margin-top: 3px;
  background: none;
  border: none;
  opacity: 0.74;
  justify-self: center;
}

.log-container-figure {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 12px;
  left: 12px;
  border-radius: 138px 153px 142px 155px / 155px 192px 98px 138px;
  background-color: rgba(63, 95, 149, 0.3);
  corner-shape: round scoop round round;
  transition: transform 3s linear;
  transform: rotate(0deg);
}

.log-container-figure:hover {
  transform: rotate(-90deg);
  transition: transform 3s;
}


</style>