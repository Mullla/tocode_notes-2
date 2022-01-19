<template lang="pug">
Form
List
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";

export default {
  components: { Form, List },


  // watch: {
  //   notes: {
  //     handler(updatedList) {
  //       localStorage.setItem("notes", JSON.stringify(updatedList));
  //     },
  //     deep: true,
  //   },
  // },

};
</script>