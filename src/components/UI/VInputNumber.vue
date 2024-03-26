<template>
    <div class="v-input-number">
        <button @click="onDecrement" :disabled="disabled">-</button>

        <input type="number" readonly v-model="modelValue">

        <button @click="onIncrement" :disabled="disabled">+</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        theme: {
            type: String
        },
        size: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        }
    });

    const modelValue = defineModel({
        required: true
    });

    function onDecrement () {
        if (modelValue.value > props.min) {
            modelValue.value--;
        }
    }

    function onIncrement () {
        if (modelValue.value < props.max) {
            modelValue.value++;
        }
    }
</script>