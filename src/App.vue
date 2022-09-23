<script setup>
import { onMounted, ref } from "vue";
const joke = ref();
const version = ref();

onMounted(async () => {
  const res = await fetch("http://localhost:3001");
  const data = await res.json();

  joke.value = data.joke;
  version.value = data.version;
});
</script>

<template>
  <header>
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl"
        >API Version : {{ this.version }}</a
      >
    </div>
  </header>

  <main>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-red-500">
            {{ this.joke?.category }}
          </h1>
          <p class="py-6">{{ this.joke?.setup }}</p>
          <p class="py-6">{{ this.joke?.delivery }}</p>
          <p class="py-6">{{ this.joke?.joke }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
