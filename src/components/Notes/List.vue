<template lang="pug">
ul.notes-list
  li.note-item(v-for="(note, index) in items", :key="index")
    .note-header 
      p {{ note.title }}
      button(@click="$emit('onRemove', index)") &#10005;
    .note-footer
      TagList(:items="note.tags", v-if="note.tags.length", isPreview)
</template>

<script>
import TagList from "@/components/UI/TagList";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  components: { TagList, TagList }
};
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>