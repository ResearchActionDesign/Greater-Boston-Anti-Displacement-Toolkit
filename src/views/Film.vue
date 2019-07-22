<template>
  <div class="film">
    <main>
      <h2>COMING SOON</h2>
    </main>
  </div>
</template>

<script>
export default {
  name: "Film",
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  }
};
</script>
