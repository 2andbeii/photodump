<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const appName = ref('2andbeii')
const page = ref('add post')

const username = ref('')
const caption = ref('')
const selectedFile = ref(null)
const uploading = ref(false)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
}

async function addpost() {
  if (!username.value || !caption.value || !selectedFile.value) {
    alert('Please fill in all fields and select an image.')
    return
  }
  
  uploading.value = true

  const formData = new FormData()
  formData.append('username', username.value)
  formData.append('caption', caption.value)
  formData.append('image', selectedFile.value)

  try {
    const response = await fetch('http://127.0.0.1:8888/upload_post', {
      method: 'POST',
      body: formData
    })
    if (!response.ok) {
      throw new Error('Upload failed')
    }
    const data = await response.json()
    alert('Post uploaded successfully!')

    // Optional: reset inputs
    username.value = ''
    caption.value = ''
    selectedFile.value = null

    // You can redirect or refresh posts here if needed
    // router.push('/') or fetchPostsAndInitSwiper()
    router.push('/home')

  } catch (err) {
    console.error(err)
    alert('Failed to upload post')
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <div class="top-bar">
    <h1>{{ appName }}</h1>
  </div>

  <form @submit.prevent="addpost" class="add-post-form">
    <label>
      Username:<br />
      <input v-model="username" type="text" required />
    </label>

    <label>
      Caption:<br />
      <input v-model="caption" type="text" required />
    </label>

    <label>
      Select Image:<br />
      <input type="file" accept="image/*" @change="onFileChange" required />
    </label>

    <button type="submit" :disabled="uploading">
      {{ uploading ? 'Uploading...' : 'Add Post' }}
    </button>
  </form>
</template>

<style scoped>
.add-post-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
  margin-top: 20px;
}

input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  padding: 0.75em;
  background-color: #6D2323;
  color: #FEF9E1;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
