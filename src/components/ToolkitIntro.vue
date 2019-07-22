<template>
  <section aria-label="overview" class="overview" :style="{'--workshop-color': toolkit.color }">
    <header>
    <h1 :style="{ color: toolkit.color }">{{toolkit.name}}</h1>
    <p class="subtitle">{{toolkit.question}}</p>
    </header>
    <img :src="require(`@/assets/${toolkit.link}.png`)" class="workshopLogo_large" alt />
    <p v-if="toolkit.num" :style="{ color: toolkit.color }" class="bold">{{$t('strings.workshop')}} {{toolkit.num}}</p>
    <div v-grid="'1fr 1fr'" class="tileIcons">
      <a :href="toolkit.print" target="_blank" :aria-label="`${$t('print')} ${toolkit.name}`" @click.stop style="justify-self: end">
        <svg class="icon" width="24px" height="24px" :alt="`${$t('print')} ${toolkit.name}`">
          <use xlink:href="./../assets/printer.svg#printer"></use>
        </svg>
      </a>
      <a :href="toolkit.edit" target="_blank" :aria-label="`${$t('edit')} ${toolkit.name}`" @click.stop style="justify-self: start">
        <svg class="icon" width="24px" height="24px" :alt="`${$t('edit')} ${toolkit.name}`">
          <use xlink:href="./../assets/pencil.svg#pencil"></use>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["toolkit"]
};
</script>
