<template>
  <section :aria-label="$t('strings.introduction')" class="introduction">
    <p v-if="$i18n.locale === 'es'" class="translator-note"><b>Nota de Traducción:</b> En este proyecto, en un esfuerzo por ser inclusives en el uso del lenguaje, se tomó la decisión de utilizar, además de la terminación ‘o’ para el masculino y la terminación ‘a’, la terminación ‘e’ para género neutro o no binario. Por consiguiente, se observa en el documento el uso de el/la/le con sus correspondientes terminaciones.</p>
    <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }"><slot name="title">{{ $t('strings.introduction') }}</slot></h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
    props: ['toolkit'],
}
</script>
