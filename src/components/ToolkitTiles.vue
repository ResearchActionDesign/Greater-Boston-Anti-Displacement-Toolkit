<template>
  <section>
    <router-link
      v-for="(workshop, index) in workshops"
      :key="index"
      :to="{ name: workshop.link }"
      :aria-label="workshop.name"
      class="workshopRoute"
    >
      <div class="toolkitTile" :style="{ borderLeft: '12px solid ' + workshop.color, '--workshop-color': workshop.color }" v-if="workshop.link">
        <h2 :style="{ color: workshop.color, textTransform: 'uppercase', lineHeight: '1'}">{{workshop.name}}</h2>
        <p class="toolkitTile__tagline">{{workshop.question}}</p>
        <img :src="require(`@/assets/${workshop.link}.png`)" class="workshopLogo" alt />
        <p :style="{ color: workshop.color }" class="bold">{{$t('strings.workshop')}} {{workshop.num}}</p>
        
        <!-- Print and Edit -->
        <div v-grid="'1fr 1fr'" class="tileIcons">
          <a :href="workshop.print" target="_blank" :aria-label="`${$t('print')} ${workshop.name}`" @click.stop style="justify-self: end">
            <svg class="icon" width="24px" height="24px" :alt="`${$t('print')} ${workshop.name}`">
              <use xlink:href="./../assets/printer.svg#printer"></use>
            </svg>
          </a>
          <a :href="workshop.edit" target="_blank" :aria-label="`${$t('edit')} ${workshop.name}`" @click.stop style="justify-self: start">
            <svg class="icon" width="24px" height="24px" :alt="`${$t('edit')} ${workshop.name}`">
              <use xlink:href="./../assets/pencil.svg#pencil"></use>
            </svg>
          </a>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["workshops"],
  data() {
    return {
      fullPath: this.$route.fullPath
    };
  },
};
</script>

<style scoped>
  section {
    margin: auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-evenly;
  }
  .toolkitTile {
    transition: 0.2s;
  }
  .toolkitTile h2 {
    min-height: 72pt;
  }

  .toolkitTile:hover {
    box-shadow: 8px 8px 26px 0.25px var(--workshop-color);
  }
</style>
