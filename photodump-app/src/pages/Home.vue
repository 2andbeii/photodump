<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { useRouter } from 'vue-router'

const router = useRouter()

const appName = ref('2andbeii')

const posts = ref('Loading...')

// const posts = ref([])
async function fetchPostsAndInitSwiper() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/posts')
    const data = await response.json()
    // posts.value = data.posts  // Assume response is { posts: [...] }

    // Create swiper container and slides manually
    const container = document.createElement('div')
    container.className = 'swiper'
    const wrapper = document.createElement('div')
    wrapper.className = 'swiper-wrapper'

    data.posts.forEach(post => {
      const slide = document.createElement('div')
      slide.className = 'swiper-slide'
      slide.textContent = post
      wrapper.appendChild(slide)
    })

    container.appendChild(wrapper)
    document.querySelector('.all-posts').appendChild(container)

    // Initialize Swiper
    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })

  } catch (err) {
    console.error('Failed to load posts:', err)
  }
}
onMounted(() => {
  // fetchPostsAndInitSwiper()
      // profile_pic_url.value = data.profile_pic_url
})

const profile_pic_url = ref('') // or e.g., 'https://example.com/myprofile.jpg'

const defaultProfilePic = '/src/images/defaultProfile.png'

// Compute style with fallback
const profileIconStyle = computed(() => {
  const imgUrl = profile_pic_url.value || defaultProfilePic
  return {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
})


function redirect_to_profile() {
  console.log("profile icon is clicked");
  router.push('/profile')
}

function redirect_to_add_post() {
  router.push('/add-post')
}


</script>

<template>
  <div class="top-bar">
    <h1>{{ appName }}</h1>
    <button
      class="profile-icon"
      :style="profileIconStyle"
      @click="redirect_to_profile"
      aria-label="Profile"
    ></button>

  </div>

  <div class="all-posts">
    <p>{{ posts }}</p>
  </div>

  <div class="add-post-container">
    <button class="add-post" @click="redirect_to_add_post">+</button>
  </div>
</template>

<style lang="css">

.all-posts {
  margin: 30px auto;
  width: 80%;
  border: 2px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.all-posts p {
  justify-self: center;
}

.add-post {
  width: 60px;
  height: 60px;
  background-color: #6D2323;
  border-radius: 50%;
  right: 30px;
  position: absolute;
  border: none;
  bottom: 20px;
  font-size: 3em;
  color: #FEF9E1;
}

.profile-icon {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
}

</style>