<template>
    <section aria-label="overview" class="overview">
      <h2 :style="{ color: toolkit.color }">{{toolkit.name}}</h2>
      <p>{{toolkit.question}}</p>
      <img :src="toolkit.img" class="tooltipLogo_large" alt>
      <p :style="{ color: toolkit.color }" class="bold">Workshop {{toolkit.num}}</p>
    </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>
