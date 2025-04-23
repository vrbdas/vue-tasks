<script setup>
import IconLogo from '@/components/icons/IconLogo.vue';
import TheHome from '@/components/TheHome.vue';
</script>

<template>
  <div class="container">
    <main>
      <div class="logo">
        <IconLogo />
        <h1 class="logo-title">Vue задачи</h1>
      </div>
      <TheHome></TheHome>
    </main>
  </div>
</template>

<style scoped lang="postcss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &-title {
    margin: 0;
    font-weight: 600;
    font-size: 3rem;
    color: #ffffff;
  }
}
</style>