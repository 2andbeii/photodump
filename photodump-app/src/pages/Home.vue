<script setup>
import { ref, onMounted, computed } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { useRouter } from 'vue-router'

const router = useRouter()
const appName = ref('2andbeii')
const posts = ref([])  // will hold array of post objects

const backendBaseUrl = 'http://127.0.0.1:8888'

async function fetchPostsAndInitSwiper() {
  try {
    const response = await fetch('http://127.0.0.1:8888/general_posts')
    const data = await response.json()

    // Backend returns object keyed by IDs, convert to array
    posts.value = Object.values(data)

    // Clear previous posts container content before rendering
    const containerEl = document.querySelector('.all-posts')
    containerEl.innerHTML = ''

    if (posts.value.length === 1) {
      // Show single post normally without swiper
      const post = posts.value[0]
      const postDiv = document.createElement('div')
      postDiv.className = 'single-post'

      postDiv.innerHTML = `
        <img src="${backendBaseUrl + post.image_url}" alt="post image" class="post-image" />
        <h3>${post.caption}</h3>
        <p>By: ${post.username}</p>
        <small>${new Date(post.timestamp).toLocaleString()}</small>
      `

      containerEl.appendChild(postDiv)

    } else if (posts.value.length > 1) {
      // Create swiper container & slides for multiple posts
      const swiperContainer = document.createElement('div')
      swiperContainer.className = 'swiper'

      const swiperWrapper = document.createElement('div')
      swiperWrapper.className = 'swiper-wrapper'

      posts.value.forEach(post => {
        const imageUrl = backendBaseUrl + post.image_url  // e.g. http://127.0.0.1:8888/uploads/hzhf.jpg
        
        // Then use imageUrl in your HTML:
        const slide = document.createElement('div')
        slide.className = 'swiper-slide'
        slide.innerHTML = `
          <img src="${imageUrl}" alt="post image" />
          <h3>${post.caption}</h3>
          <p>By: ${post.username}</p>
          <small>${new Date(post.timestamp).toLocaleString()}</small>
        `
        swiperWrapper.appendChild(slide)
      })

      swiperContainer.appendChild(swiperWrapper)
      containerEl.appendChild(swiperContainer)

      new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      })
    } else {
      containerEl.innerHTML = '<p>No posts available.</p>'
    }

  } catch (err) {
    console.error('Failed to load posts:', err)
  }
}


onMounted(() => {
  fetchPostsAndInitSwiper()
})

const profile_pic_url = ref('')
const defaultProfilePic = '/src/images/defaultProfile.png'

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
    <p>Loading posts...</p>
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
  min-height: 300px;
}

.single-post,
.swiper {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.single-post img,
.swiper-slide img {
  max-width: 100%;
  border-radius: 8px;
}

.swiper-slide img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.swiper-slide h3,
.swiper-slide p,
.swiper-slide small {
  margin: 0;
  font-style: italic;
  color: #666;
}

.single-post .post-image {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.add-post {
  width: 60px;
  height: 60px;
  background-color: #6D2323;
  border-radius: 50%;
  right: 30px;
  position: absolute;
  bottom: 20px;
  border: none;
  font-size: 3em;
  color: #FEF9E1;
  cursor: pointer;
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
