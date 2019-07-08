<template>
  <section :class="{toolkit_Tiles : fullPath =='/Toolkit'}">
    <router-link
      v-for="(workshop, index) in workshops"
      :key="index"
      :to="{ name: workshop.link }"
      :aria-label="workshop.name"
      class="workshopRoute"
    >
      <div class="toolkitTile" :style="{ borderLeft: '12px solid ' + workshop.color }" v-if="workshop.link">
        <h2 :style="{ color: workshop.color }">{{workshop.name}}</h2>
        <p>{{workshop.question}}</p>
        <img :src="require(`@/assets/${workshop.link}.png`)" class="workshopLogo" alt />
        <p :style="{ color: workshop.color }" class="bold">Workshop {{workshop.num}}</p>
        
        <!-- Print and Edit -->
        <div v-grid="'1fr 1fr'" class="tileIcons">
          <a :href="workshop.print" target="_blank" :aria-label="print + ' ' + workshop.name" @click.stop>
            <img src="./../assets/printer.svg" :alt="print + ' ' + workshop.name" />
          </a>
          <a :href="workshop.edit" target="_blank" :aria-label="edit + ' ' + workshop.name" @click.stop>
            <img src="./../assets/pencil.svg" :alt="edit + ' ' + workshop.name" />
          </a>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["workshops"],
  data() {
    return {
      fullPath: this.$route.fullPath
    };
  },
  computed: {
    ...mapState(["edit", "print"])
  }
};
</script>
