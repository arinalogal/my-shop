<template>
    <div 
        class="v-col"
        :class="{
            [`v-col--span-${span}`]: span,
            [`v-col--span-sm-${sm}`]: sm,
            [`v-col--span-md-${md}`]: md
        }"
    >
        <slot/>
    </div>
</template>

<script setup>
    defineProps({
        span: {
            type: String
        },
        sm: {
            type: String
        },
        md: {
            type: String
        }
    })
</script>

<style>
    .v-col {
        padding-left: 10px;
        padding-right: 10px;
    }

    .v-col--span-1 {
        width: calc(var(--col-size) * 1);
    }
    .v-col--span-2 {
        width: calc(var(--col-size) * 2);
    }
    .v-col--span-3 {
        width: calc(var(--col-size) * 3);
    }
    .v-col--span-4 {
        width: calc(var(--col-size) * 4);
    }
    .v-col--span-5 {
        width: calc(var(--col-size) * 5);
    }
    .v-col--span-6 {
        width: calc(var(--col-size) * 6);
    }
    .v-col--span-7 {
        width: calc(var(--col-size) * 7);
    }
    .v-col--span-8 {
        width: calc(var(--col-size) * 8);
    }
    .v-col--span-9 {
        width: calc(var(--col-size) * 9);
    }
    .v-col--span-10 {
        width: calc(var(--col-size) * 10);
    }
    .v-col--span-11 {
        width: calc(var(--col-size) * 11);
    }
    .v-col--span-12 {
        width: calc(var(--col-size) * 12);
    }

    @media screen and (max-width: 1024px) {
        .v-col--span-md-1 {
            width: calc(var(--col-size) * 1);
        }
        .v-col--span-md-2 {
            width: calc(var(--col-size) * 2);
        }
        .v-col--span-md-3 {
            width: calc(var(--col-size) * 3);
        }
        .v-col--span-md-4 {
            width: calc(var(--col-size) * 4);
        }
        .v-col--span-md-5 {
            width: calc(var(--col-size) * 5);
        }
        .v-col--span-md-6 {
            width: calc(var(--col-size) * 6);
        }
        .v-col--span-md-7 {
            width: calc(var(--col-size) * 7);
        }
        .v-col--span-md-8 {
            width: calc(var(--col-size) * 8);
        }
        .v-col--span-md-9 {
            width: calc(var(--col-size) * 9);
        }
        .v-col--span-md-10 {
            width: calc(var(--col-size) * 10);
        }
        .v-col--span-md-11 {
            width: calc(var(--col-size) * 11);
        }
        .v-col--span-md-12 {
            width: calc(var(--col-size) * 12);
        }
    }

    @media screen and (max-width: 570px) {
        .v-col--span-sm-1 {
            width: calc(var(--col-size) * 1);
        }
        .v-col--span-sm-2 {
            width: calc(var(--col-size) * 2);
        }
        .v-col--span-sm-3 {
            width: calc(var(--col-size) * 3);
        }
        .v-col--span-sm-4 {
            width: calc(var(--col-size) * 4);
        }
        .v-col--span-sm-5 {
            width: calc(var(--col-size) * 5);
        }
        .v-col--span-sm-6 {
            width: calc(var(--col-size) * 6);
        }
        .v-col--span-sm-7 {
            width: calc(var(--col-size) * 7);
        }
        .v-col--span-sm-8 {
            width: calc(var(--col-size) * 8);
        }
        .v-col--span-sm-9 {
            width: calc(var(--col-size) * 9);
        }
        .v-col--span-sm-10 {
            width: calc(var(--col-size) * 10);
        }
        .v-col--span-sm-11 {
            width: calc(var(--col-size) * 11);
        }
        .v-col--span-sm-12 {
            width: calc(var(--col-size) * 12);
        }
    }
</style>