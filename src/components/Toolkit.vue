<template>
  <section>
    <router-link
      v-for="(workshop, index) in workshops"
      :key="index"
      :to="{ name: workshop.link, params: {WorkshopName: workshop.nameRoute } }"
      :aria-label="workshop.name"
      class="workshopRoute"
    >
      <div class="toolkipTile" :style="{ borderLeft: '12px solid ' + workshop.color }">
        <h2 :style="{ color: workshop.color }">{{workshop.name}}</h2>
        <p>{{workshop.question}}</p>
        <img :src="workshop.img" class="tooltipLogo" alt>
        <p :style="{ color: workshop.color }" class="bold">Workshop {{workshop.num}}</p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["workshops"]
};
</script>
