<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="$t('filmToolkit')"></ToolkitIntro>
  </main>
</template>


<script>
  import ToolkitIntro from '../ToolkitIntro';

  export default {
    name: "Film",
    components: {
      ToolkitIntro,
    }
  };
</script>
