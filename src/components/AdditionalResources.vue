<template>
  <section aria-label="Additional Resources and Tools" class="Additional_Resources_and_Tools">
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Additional Resources and Tools</h2>
    <ul>
      <li v-for="(resource, index) in toolkit.resources" :key="index">
        {{resource.text}}
        <a :href="resource.link" target="_blank">{{resource.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["toolkit"]
};
</script>