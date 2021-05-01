<template>
    <v-snackbar v-model="snackbar" :timeout="timeout">{{ text }}</v-snackbar>
</template>

<script>
export default {
    data: () => ({
      snackbar: false,
      text: '',
      timeout: 2000,
    }),
    props:{
      options: Object,
    },
    watch:{
      options(e){
        this.timeout = e.delay;
        this.text = e.text;
        this.snackbar = true
      }
    },
  }
</script>