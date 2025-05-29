<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const appName = ref('2andbeii')

const username = ref('')
const password = ref('')

function handleLogin() {
  alert(`Logging in as: ${username.value}`)
  // Add your login logic here
}

function redirect_to_register() {
    router.push('/register')
}
</script>

<template>
    <div class="app">
    <div class="top-bar">
        <h1>{{ appName }}</h1>
    </div>
    <div class="login-section">
        <form @submit.prevent="handleLogin" class="login-form">
            <h2>Login</h2>
            <label for="username">Username</label>
            <input
                id="username"
                type="text"
                v-model="username"
                placeholder="Enter username"
                required
                autocomplete="username"
            />

            <label for="password">Password</label>
            <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Enter password"
                required
                autocomplete="current-password"
            />

            <button type="submit">Log In</button>
        </form>
        <a class="register-link" @click="redirect_to_register">Don't have an account? Register here</a>
    </div>
  </div>
</template>

<style scoped>

.login-section {
  width: 300px;
  background-color: #6D2323;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
}

.login-form label {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.login-form input {
  padding: 0.5rem;
  margin-bottom: 1.25rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.3s ease;
}

.login-form button {
  background-color: #f4f1de;
  color: #6d2323;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.login-form button:hover {
  background-color: #e6d6c3;
}

.register-link {
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    margin-top: 15px;
}
</style>
