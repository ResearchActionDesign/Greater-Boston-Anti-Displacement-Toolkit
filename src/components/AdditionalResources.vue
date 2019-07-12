<template>
  <section aria-label="Additional Resources and Tools" class="Additional_Resources_and_Tools">
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Additional Resources & Tools</h2>
    <ul>
      <li v-for="(resource, index) in toolkit.resources" :key="index">
        <a :href="resource.link" target="_blank">{{resource.name}}</a> {{resource.text}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["toolkit"]
};
</script>