<template>
  <div class="resources">
    <main>
      <div class="sort_list">
        <div class="filter__text" @click="selectedWorkshop && selectWorkshop(null)">{{ selectedWorkshop === null ? $t('strings.filterByWorkshop') : $t('strings.clearFilter') }}</div>
        <div
            v-for="workshop of workshops"
            :key="workshop.link"
            :class="['sort__list__item', workshop.link===selectedWorkshop ? 'active': '']"
            @click="selectWorkshop(workshop.link)"
        >
          {{ workshop.link }}
        </div>
      </div>
      <a v-for="r of resources.filter(r => (this.selectedWorkshop === null || r.toolkit === this.selectedWorkshop))" class="resource" :key="r.name" :href="r.link">
        <div class="resource__bullet" :style="{borderColor: r.color}"></div>
        <div class="resource__item"><b>{{r.name}}</b><br/>{{r.text}}</div>
      </a>
    </main>
  </div>
</template>

<script>
export default {
  name: "Resources",
  data: function() {
    return { selectedWorkshop: null };
  },
  computed: {
    resources: function() {
      return this.$t('toolkits').flatMap(t => t.resources.map(r => ({toolkit: t.link, color: t.color, ...r}))).sort(
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
      return this.$t('toolkits');
    }
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
  }
  .sort_list .active {
    font-weight: bold;
  }

  .filter__text {
    font-style: italic;
    font-weight: bold;
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

  a.resource {
    display: block;
    text-decoration: none;
    color: inherit;
    margin-bottom: 2em;
  }


</style>