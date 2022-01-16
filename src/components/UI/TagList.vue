<template lang="pug">
ul.tags-list
  li.tag-item(
    v-for="item in items",
    :key="item",
    @click="checkItem",
    :class="{ isPreview: isPreview, isActive: isActive}"
  )
    span {{ item }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    checkItem (e) {
      this.$emit('onItemClick', e.target.innerText)
      e.target.closest('.tag-item').classList.add('isActive')
    }
  }
};
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;

  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }

  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;

    &:before {
      content: "#";
    }
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>