<template>
    <nav class="v-menu">
        <router-link to="/catalog" class="v-menu__item">
            Каталог
        </router-link>

        <router-link to="/cart" class="v-menu__item">
            Корзина
        </router-link>
    </nav>
</template>

<script setup>
    import { useAuth } from '@/composables';

    const { isAuth } = useAuth();
</script>

<style>
    .v-menu {
        display: flex;
        flex-flow: row wrap;
        gap: 0 10px;
    }

    .v-menu__item {
        color: var(--color-black);
    }

    .v-menu__item.router-link-active {
        color: red;
    }
</style>