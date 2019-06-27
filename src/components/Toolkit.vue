<template>
  <div>
    <section v-for="(workshop, index) in workshops" :key="index" class="toolkipTile" :style="{ borderLeft: '12px solid ' + workshop.color }">
      <h2 :style="{ color: workshop.color }">{{workshop.name}}</h2>
      <p>{{workshop.question}}</p>
      <img :src="workshop.img" class="tooltipLogo" alt>
      <p :style="{ color: workshop.color }">Workshop {{workshop.num}}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: ["workshops"]
};
</script>
