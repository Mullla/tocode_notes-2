<template lang="pug">
.note-form__wrapper
  form.note-form(@submit.prevent="onSubmit")
    textarea(v-model="value", placeholder="Type your note")
    TagList(:items="tags", @onItemClick="handleTagClick", :isActive="isActive")
    button.btn.btnPrimary(type="submit") Add new note
</template>

<script>
import TagList from "@/components/UI/TagList";

export default {
  components: { TagList},

  data() {
    return {
      value: "",
      tags: ["home", "work", "travel"],
      selectedTags: new Set(),
      isActive: false
    };
  },

  methods: {
    onSubmit() {
      this.$emit("onSubmit", {title: this.value, tags: [...this.selectedTags]});
      this.value = "";
      this.selectedTags.clear()
      this.isActive = false
    },
    handleTagClick(tag) {
      this.selectedTags.add(tag)
    }
  },
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>