<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const appName = ref('2andbeii')

const count = ref(1)
const followers = ref(3)
const following = ref(5)

const username = ref('twoandbeii')

const profile_pic_url = ref(null)

onMounted(() => {
  console.log('Profile mounted')
  // after calling backend to retreive
  // profile_pic_url.value = data.profile_pic_url // this is a full image URL
})

function redirect_to_edit_profile(){
  router.push('/edit-profile')
}

function redirect_to_home() {
  router.push('/home')
}

</script>

<template>
  <div class="top-bar">
    <h1>{{ appName }}</h1>
    <button class="home-icon" @click="redirect_to_home" aria-label="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24"
        height="24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 001 1h3m-10-6h4" />
      </svg>
    </button>
  </div>
  <div class="profile-username"> @{{ username }}</div>
  <div class="profile-section">
    <div class="profile-pic">
      <img
        v-if="profile_pic_url"
        :src="profile_pic_url"
        alt="Profile Picture from Backend"
      />
      <img
        v-else
        src="/src/images/defaultProfile.png"
        alt="Default Profile Picture"
      />
      <button class="edit-profile" @click="redirect_to_edit_profile">Edit Profile</button>
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

  <div class="divider"></div>
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

.edit-profile {
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
  font-weight: 600;
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

.divider {
  margin-top: 10px;
  border-bottom: 2px solid #6d2323;
}

.home-icon {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
}
.home-icon svg {
  stroke: #FEF9E1;
}


</style>