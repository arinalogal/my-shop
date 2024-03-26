<template>
    <div class="v-collapse">
        <button @click="onToggle">{{ title }}</button>

        <div 
            v-if="isVisible"
            class="v-collapse__menu"
        >
            <slot/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    defineProps({
        title: {
            type: String
        }
    });

    const isVisible = ref(false);

    function onToggle () {
        isVisible.value = !isVisible.value;
    }
</script>

<style>
    .v-collapse {
        position: relative;
    }

    .v-collapse__menu {
        position: absolute;
        top: 100%;
        left: 0;

        z-index: 2;

        background: #fff;
        box-shadow: 0 0 5px rgba(0,0,0,.5);

        width: 250px;
        padding: 10px;
    }
</style>