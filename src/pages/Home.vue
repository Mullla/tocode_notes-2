<template lang="pug">
Form(@onSubmit="handleSubmit")
List(:items="notes", @onRemove="handleRemove")
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";
import notes from '@/seeders/notes';

export default {
  components: { Form, List },

  data() {
    return {
      notes: notes,
    };
  },

  methods: {
    handleSubmit(note) {
      this.notes.push(note);
    },
    handleRemove(index) {
      console.log(`note ${index} has been removed`);
      this.notes.splice(index, 1);
    },
    getNotes() {
      const localNotes = JSON.parse(localStorage.getItem("notes"));

      if (localNotes) {
        this.notes = localNotes;
      }
    },
  },

  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },

  mounted() {
    this.getNotes();
  },
};
</script>