<template>
    <p>
        <strong class="red_bold">{{ $t('facilitator') }}: </strong> <em class="italic"><slot></slot></em>
    </p>
</template>

<style scoped>
    .instructions {
        font-style: unset;
    }
</style>