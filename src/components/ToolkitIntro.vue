<template>
  <section aria-label="overview" class="overview">
    <h2 :style="{ color: toolkit.color }">{{toolkit.name}}</h2>
    <p>{{toolkit.question}}</p>
    <img :src="require(`@/assets/${toolkit.link}.png`)" class="workshopLogo_large" alt />
    <p v-if="toolkit.num" :style="{ color: toolkit.color }" class="bold">{{$t('strings.workshop')}} {{toolkit.num}}</p>
    <div v-grid="'1fr 1fr'" class="tileActions">
      <a :href="toolkit.print" target="_blank" :aria-label="toolkit.print + ' ' + toolkit.name" @click.stop>
        <img class="tileActons_icon" src="@/assets/printer.svg" :alt="toolkit.print + ' ' + toolkit.name" />
      </a>
      <a :href="toolkit.edit" target="_blank" :aria-label="toolkit.edit + ' ' + toolkit.name" @click.stop>
        <img class="tileActons_icon" src="@/assets/pencil.svg" :alt="toolkit.edit + ' ' + toolkit.name" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["toolkit"]
};
</script>

<style scoped>
  h2 {
    text-transform: uppercase;
  }
</style>
