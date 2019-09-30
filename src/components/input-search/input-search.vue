<template>
  <div class="inputSearch-wrap">
    <i class="mintui mintui-search"></i>
    <input class="inputSearch-input mint-field-core"
      type="text"
      v-model="inputValue"
      @blur="blurInput"
      @focus="focusInput"
      :autocomplete="autocomplete"
      :placeholder="placeholder">
  </div>
</template>

<script lang="ts" src="./input-search.ts"></script>
<style lang="scss" src="./input-search.scss"></style>
