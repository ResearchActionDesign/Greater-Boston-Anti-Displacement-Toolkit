<template>
    <p>
        <strong class="red_bold">{{ $t('instructions') }}: </strong> <slot></slot>
    </p>
</template>

<style scoped>
    .facilitator {
        font-style: italic;
    }
</style>