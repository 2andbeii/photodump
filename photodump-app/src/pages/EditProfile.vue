<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const appName = ref('2andbeii')

const username = ref('')
const password = ref('')

function get_username() {
  return username;
}

const file_input = ref(null)
const profile_pic = ref(null) // You can store or preview the selected image

function change_profile_pic() {
  file_input.value?.click()
}

function handle_file_change(event) {
  const file = event.target.files[0]
  if (file) {
    if (profile_pic.value) {
      URL.revokeObjectURL(profile_pic.value.previewUrl)
    }
    file.previewUrl = URL.createObjectURL(file)
    profile_pic.value = file
    // console.log('Selected image:', file)
  }
}


function update_details() {

}

function redirect_to_profile() {
  router.push('/profile')
}

</script>

<template>
    <div class="app">
    <div class="top-bar">
        <h1>{{ appName }}</h1>
    </div>
    <div class="top-row">
      <button class="back-button" @click="redirect_to_profile">←</button>
      <h2>Edit Profile Details</h2>
    </div>
    
    <div class="edit-section">
        <form class="edit-form" @submit.prevent="update_details">
          <div class="profile-pic-section">
             <div class="profile-pic">
                <img
                  v-if="profile_pic"
                  :src="profile_pic.previewUrl"
                  alt="Profile Picture Preview"
                />
                <img
                  v-else
                  src="/src/images/defaultProfile.png"
                  alt="Default Profile Picture"
                />
              <button class="change-profile-pic" @click.prevent="change_profile_pic">Change Profile Picture</button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref="file_input"
              @change="handle_file_change"
              style="display: none"
            />
          </div>
         
          <div class="username-section">
            <label for="username">Username</label>
            <input
                id="username"
                type="text"
                v-model="username"
                required
                autocomplete="off"
            />
          </div>

          <div class="password-section">
            <label for="password">Password</label>
            <input
                id="password"
                type="text"
                v-model="password"
                required
                placeholder="Edit to change password"
            />
          </div>

          <button type="submit" class="update-button">Update</button>
        </form>
    </div>
  </div>
</template>

<style scoped>

h2 {
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  padding-top: 10px;
  color: #A31D1D;
}

.back-button {
  width: 60px;
  height: 60px;
  color: #6D2323;
  border-radius: 50%;
  left: 30px;
  position: absolute;
  border: none;
  background-color: transparent;
  font-size: 50px;
}

.edit-section {
  justify-self: center;
  margin-top: 50px;
  width: 70%;
  justify-self: center;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
}

.username-section, .password-section {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}

label {
  font-size: 0.9rem;
  color: #6d2323;
  font-weight: 600;
  padding-top: 3px;
}

input {
  width: 50%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #8c7272;
}

input::placeholder {
  color: #E5D0AC;
}

input:focus {
  outline: none;
  box-shadow: none;
}

.update-button {
  background-color: #f4f1de;
  color: #6d2323;
  font-weight: 600;
  padding: 0.75rem;
  border: 1px solid #6d2323;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;
  align-self: center;
  margin-top: 50px;
  width: 100%;
  max-width: 200px;
}


.update-button:hover {
    background-color: #A31D1D;
    color: white;
}

.profile-pic-section {
  justify-items: center;
}

.profile-pic {
  width: 100%;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-pic img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.change-profile-pic {
  font-size: 15px;
  font-weight: 600;
  color: #A31D1D;
  background-color: transparent;
  border: none;
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
  text-decoration: underline;
}

</style>