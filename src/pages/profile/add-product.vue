<template>
    <v-layout-default>
        <v-container>
            <div>
                Название
                <input type="text" v-model="model.title">
            </div>

            <div>
                Изображение
                <input type="text" v-model="model.image">
            </div>

            <div>
                Категория
                <select v-model="model.categoryId">
                    <option 
                        v-for="category in categories"
                        :value="category.id"
                    >
                        {{ category.title }}
                    </option>
                </select>
            </div>

            <div>
                Цена
                <input type="text" v-model="model.price">
            </div>

            <v-button theme="primary" size="medium" @click="onSubmit">
                Добавить товар
            </v-button>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VButton from '@/components/UI/VButton.vue';
    import { useCatalog } from '@/composables';

    const model = ref({
        image: '',
        title: '',
        categoryId: '',
        price: ''
    });

    const { categories, getCatalog, addProduct } = useCatalog();

    getCatalog();

    function onSubmit () {
        addProduct(model.value);
    }
</script>