<template>
    <div class="v-catalog-detail-gallery">
        <div class="v-catalog-detail-gallery__thumbs">
            <div class="v-catalog-detail-gallery__thumbs-list">
                <img 
                    v-for="(image, imageIndex) in images"
                    :src="image"
                    @click="onClick(imageIndex)"
                >
            </div>
        </div>

        <div class="v-catalog-detail-gallery__image">
            <img :src="currentImage">
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        images: {
            type: Array
        }
    });

    const imageIndex = ref(0);

    const currentImage = computed(() => props.images[imageIndex.value]);

    function onClick (index) {
        imageIndex.value = index;
    } 
</script>

<style>
    .v-catalog-detail-gallery {
        display: flex;
        flex-flow: row nowrap;
        gap: 20px;

        height: 400px;
    }

    .v-catalog-detail-gallery__thumbs {
        flex: 0 0 100px;
        height: 100%;
        overflow-y: auto;
    }

    .v-catalog-detail-gallery__thumbs-list {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
    }

    .v-catalog-detail-gallery__thumbs img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    .v-catalog-detail-gallery__image {
        flex: 1;
        height: 100%;
    }

    .v-catalog-detail-gallery__image img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>