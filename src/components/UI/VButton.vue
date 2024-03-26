<template>
    <button 
        class="v-button"
        :class="{
            'v-button--wide': wide,
            'v-button--plain': plain,
            [`v-button--size-${size}`]: size,
            [`v-button--theme-${theme}`]: theme
        }"
        :disabled="disabled"
    >
        <slot/>
    </button>
</template>

<script setup>
    defineProps({
        theme: {
            type: String
        },
        size: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        wide: {
            type: Boolean
        },
        plain: {
            type: Boolean
        }
    });
</script>

<style>
    .v-button {
        border: 1px solid;

        cursor: pointer;
    }

    .v-button--wide {
        display: block;
        width: 100%;
    }

    .v-button:disabled {
        cursor: not-allowed;
        opacity: .6;
    }

    .v-button--theme-danger {
        background-color: red;
        border-color: red;

        color: #fff;
    }

    .v-button--theme-primary {
        background-color: #0d6efd;
        border-color: #0d6efd;

        color: #fff;
    }

    .v-button--theme-primary:hover {
        background-color: #0b5ed7;
        border-color: #0b5ed7;
    }

    .v-button--theme-success {
        background-color: #198754;
        border-color: #198754;

        color: #fff;
    }

    .v-button--theme-success:hover {
        background-color: #157347;
        border-color: #157347;
    }

    .v-button--theme-secondary {
        background-color: #fff;
        border-color: #fff;

        color: #000;
    }

    .v-button--size-small {
        padding: 4px 6px;
    }

    .v-button--size-medium {
        padding: 6px 8px;
    }

    .v-button--size-large {
        padding: 8px 10px;
    }

    .v-button--plain {
        background-color: transparent;
    }
</style>