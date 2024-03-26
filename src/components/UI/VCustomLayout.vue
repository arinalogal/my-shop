<template>
  <div class="layout">
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import VHeader from "@/components/VHeader.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
}

.layout__main {
  flex: 1;
}
</style>
