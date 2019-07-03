<template>
  <section aria-label="overview" class="overview">
    <h2 :style="{ color: toolkit.color }">{{toolkit.name}}</h2>
    <p>{{toolkit.question}}</p>
    <img :src="toolkit.img" class="tooltipLogo_large" alt />
    <p :style="{ color: toolkit.color }" class="bold">Workshop {{toolkit.num}}</p>
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
