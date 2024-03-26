<template>
    <div class="v-cart-card">
        <div>{{ title }}</div>

        <div>{{ price }}</div>

        <v-input-number 
            v-model="count"
            @update:modelValue="onChangeCount"
        />
        
        <v-button @click="onDelete">
            Удалить
        </v-button>

        <br><br>

        <label>
            <input 
                type="checkbox" 
                v-model="checked"
                @change="onChangeDelay"
            > 
            
            Добавить в отложенные
        </label>
        <hr>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import VInputNumber from '@/components/UI/VInputNumber.vue';
    import VButton from '@/components/UI/VButton.vue';

    const props = defineProps({
        id: {
            type: Number
        },
        title: {
            type: String
        },
        image: {
            type: String
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number
        },
        delay: {
            type: Boolean
        }
    });

    const emit = defineEmits([
        'changeCount',
        'changeDelay',
        'delete'
    ]);

    const count = ref(props.quantity);

    const checked = ref(props.delay);

    function onChangeCount () {
        emit('changeCount', {
            id: props.id,
            quantity: count.value
        });
    }

    function onChangeDelay () {
        emit('changeDelay', {
            id: props.id,
            delay: checked.value
        });
    }

    function onDelete () {
        emit('delete', props.id);
    }
</script>