<template>
    <div class="v-sidebar-menu">
        <button 
            class="v-sidebar-menu__button"
            :class="{
                'v-sidebar-menu__button--open': isOpen
            }"
            @click="onToggle"
        >
            <span/>
            <span/>
            <span/>
        </button>

        <transition name="fade-in-left">
            <div 
                v-if="isOpen"
                class="v-sidebar-menu__content"
            >
                <div class="v-sidebar-menu__content-overlay"/>

                <div class="v-sidebar-menu__content-body">
                    <v-menu/>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import VMenu from '@/components/VMenu.vue';

    const isOpen = ref(false);

    function onToggle () {
        isOpen.value = !isOpen.value;
    }
</script>

<style>
    .fade-in-left-enter-active,
    .fade-in-left-leave-active {
        transition: 0.5s ease;
    }

    .fade-in-left-enter-from,
    .fade-in-left-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }

    .v-sidebar-menu {
        position: relative;
        z-index: 100;
    }

    .v-sidebar-menu__button {
        position: relative;
        z-index: 3;

        display: flex;
        flex-flow: column nowrap;
        gap: 5px;
        border: 0;
        padding: 0;
        background-color: transparent;
    }

    .v-sidebar-menu__button span {
        display: block;
        height: 2px;
        width: 30px;

        background-color: #000;

        transition: .3s ease-in-out;
    }

    .v-sidebar-menu__button--open span:first-child {
        transform: rotate(45deg) translate(0,10px);
    }

    .v-sidebar-menu__button--open span:nth-child(2) {
        opacity: 0;
    }

    .v-sidebar-menu__button--open span:last-child {
        transform: rotate(-45deg) translate(0,-10px);
    }

    .v-sidebar-menu__content {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        z-index: 2;
    }

    .v-sidebar-menu__content-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        background: rgba(0,0,0,.5);
    }

    .v-sidebar-menu__content-body {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        width: 400px;
        background-color: #fff;
        box-shadow: 0 0 10px black;
    }
</style>