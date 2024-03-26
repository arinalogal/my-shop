<template>
    <article class="v-catalog-card">
        <router-link :to="`/catalog/${category}/${id}`">
            <div 
                v-if="images.length"
                class="v-catalog-card__gallery"
            >
                <img :src="currentImage" class="v-catalog-card__gallery-image">

                <div class="v-catalog-card__gallery-areas">
                    <div 
                        v-for="(area, areaIndex) in images"
                        class="v-catalog-card__gallery-areas__item"
                        @mouseover="onMouseover(areaIndex)"
                    />
                </div>
            </div>

        </router-link>

        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>

        <div>
            {{ formattedPrice }}
        </div>

        <br>

        <v-input-number v-model="count"/>

        <br>

        <v-button
            :theme="currentThemeFavoriteButton"
            size="large"
            wide
            @click="onAddToFavorites"
        >
            {{ isFavorites ? 'Удалить из избранного' : 'Добавить в избранное' }}
        </v-button>

        <v-button
            theme="primary"
            size="large"
            wide
            @click="onAddToCart"
        >
            Добавить в корзину
        </v-button>
    </article>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { priceFormat } from '@/utils';
    import VButton from '@/components/UI/VButton.vue';
    import VInputNumber from '@/components/UI/VInputNumber.vue';

    const props = defineProps({
        category: {
            type: [String, Number]
        },
        id: {
            type: Number
        },
        price: {
            type: Number
        },
        title: {
            type: String
        },
        images: {
            type: Array
        },
        isFavorites: {
            type: Boolean
        }
    });

    const formattedPrice = computed(() => priceFormat(props.price));

    const emit = defineEmits([
        'addToCart',
        'addToFavorites'
    ]);

    const count = ref(1);

    const currentImageIndex = ref(0);

    const currentImage = computed(() => props.images[currentImageIndex.value]);

    const currentThemeFavoriteButton = computed(() => {
        return props.isFavorites
            ? 'danger'
            : 'success'
    });

    function onAddToCart () {
        emit('addToCart', {
            title: props.title,
            images: props.images,
            price: props.price,
            id: props.id,
            quantity: count.value
        });
    }

    function onAddToFavorites () {
        emit('addToFavorites', {
            id: props.id,
            isFavorites: !props.isFavorites
        });
    }

    function onMouseover (index) {
        currentImageIndex.value = index;
    }
</script>

<style>
    .v-catalog-card {
        border: 1px solid;
    }

    .v-catalog-card__gallery {
        position: relative;
        width: 100%;
        height: 200px;
    }

    .v-catalog-card__gallery-image {
        display: block;
        width: 100%;
        height: 100%;
    }

    .v-catalog-card__gallery-areas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: row nowrap;
    }

    .v-catalog-card__gallery-areas__item {
        flex: 1;
    }
</style>