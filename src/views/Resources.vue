<template>
  <div class="resources">
    <main>
      <p v-if="$i18n.locale === 'es'"><em>Nota: la mayoría de los recursos solo están disponibles en inglés.</em></p>
      <div class="sort_list">
        <div class="filter__text" @click="selectedWorkshop && selectWorkshop(null)">{{ selectedWorkshop === null ? $t('strings.filterByWorkshop') : $t('strings.clearFilter') }}</div>
        <div
            v-for="workshop of workshops"
            :key="workshop.link"
            :style="{'--workshop-color': workshop.color }"
            :class="['sort_list__item', workshop.link===selectedWorkshop ? 'active': '', workshop.link===hoverWorkshop ? 'hover': '', ]"
            @mouseover="hoverWorkshop = workshop.link"
            @mouseout="hoverWorkshop = null"
            @click="selectWorkshop(workshop.link)"
        >
          {{ workshop.name }}
        </div>
      </div><a v-for="r of resources.filter(r => (this.selectedWorkshop === null || r.toolkit === this.selectedWorkshop))" class="resource" :key="r.name" :href="r.link" target="_blank"
         @mouseover="hoverLink = r.name"
         @mouseout="hoverLink = null">
        <div class="resource__bullet" :style="{borderColor: r.color}"></div>
        <div class="resource__item"><span class="resource__item__name" :style="hoverLink === r.name ? { color: r.color } : {}">{{r.name}}</span><br/>{{r.text}}</div>
      </a>
    </main>
  </div>
</template>

<script>
export default {
  name: "Resources",
  data: function() {
    return { selectedWorkshop: null, hoverWorkshop: null, hoverLink: null };
  },
  computed: {
    resources: function() {
      return Object.values(this.workshops).flatMap(t => t.resources.map(r => ({toolkit: t.link, color: t.color, ...r}))).sort(
          (a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            else {
              return 1;
            }
          }
      );
    },
    workshops: function() {
      return { ...this.$t('toolkits'), Film: this.$t('filmToolkit') };
    }
  },
  mounted() {
    document.dispatchEvent(new Event("x-app-rendered"));
  },
  methods: {
    selectWorkshop(workshop) {
      if (this.selectedWorkshop !== workshop) {
        this.selectedWorkshop = workshop;
      } else {
        this.selectedWorkshop = null;
      }
    },
  }
};
</script>

<style scoped>
  .sort_list {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 2em;
    cursor: pointer;
    line-height: 1.5;
    font-size: 13.28pt;
  }
  .sort_list .active, .sort_list .hover {
    font-weight: bold;
    color: var(--workshop-color);
  }

  .filter__text {
    font-style: italic;
    font-weight: bold;
    font-size: 16pt;
  }

  .resource__bullet {
    width: 0px;
    height: 0px;
    border: 10px solid red;
    border-radius: 10px;
    float: left;
  }

  .resource__item {
    margin-left: 25px;
  }

  .resource__item__name {
    font-weight: bold;
  }

  a.resource {
    display: block;
    text-decoration: none;
    color: inherit;
    margin-bottom: 2em;
  }
</style>
