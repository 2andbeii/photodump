<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const appName = ref('2andbeii')

const count = ref(1)
const followers = ref(3)
const following = ref(5)

const username = ref('twoandbeii')

onMounted(() => {
  console.log('Profile mounted')
})

function change_profile_pic() {

}

function redirect_to_edit_profile(){
  router.push('/edit-profile')
}

</script>

<template>
  <div class="top-bar">
    <h1>{{ appName }}</h1>
  </div>
  <div class="profile-username"> @{{ username }}</div>
  <div class="profile-section">
    <div class="profile-pic">
      <img src="/Users/zx/OneDrive - ComfortDelGro Corporation Limited/Pictures/Screenshots/Screenshot 2024-05-28 165021.png"/>
      <button class="change-profile-pic" @click="change_profile_pic">Change Profile Picture</button>
      <button class="edit-profile" @click="redirect_to_edit_profile">Edit Info</button>
    </div>

    <div class="profile-stats">
      <div class="stat-item">
        <div class="stat-number">{{ count }}</div>
        <div class="stat-label">Posts</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ followers }}</div>
        <div class="stat-label">Followers</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ following }}</div>
        <div class="stat-label">Following</div>
      </div>
    </div>

  </div>
</template>

<style lang="css">
body {
  overflow: hidden;
  height: 100vh;
}

.profile-username {
  font-weight: 600;
  color: #6d2323;
  font-family: system-ui;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
}

.profile-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.profile-pic {
  width: 40%;
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

.change-profile-pic, .edit-profile {
  margin-top: 1rem;
  font-size: 0.9rem;
  background-color: #f4f1de;
  color: #6d2323;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #6d2323;
  text-align: center;
  width: 100%;
  max-width: 200px;
}

.profile-stats {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.6em;
  font-weight: bold;
  color: #A31D1D;
}

.stat-label {
  font-weight: 600;
  font-size: 0.85em;
  color: #6D2323;
}

@media (max-width: 435px) {
  .profile-section {
    flex-direction: column;
    align-items: center;
  }

  .profile-pic,
  .profile-stats {
    width: 100%;
    max-width: 100%;
  }

  .profile-stats {
    margin-top: 1rem;
    justify-content: space-between;
  }
}

</style>