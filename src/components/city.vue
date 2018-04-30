<template>
  <div id="category">
      <span>
          <input type="checkbox" :id="cityName" @click="selectThisCity">
          <label :for="cityName">{{cityName}}</label>
      </span>
  </div>
</template>

<script>
export default {
  props: {
      c: {
          type: Object,
          required: true
      }
  },
  data() {
      return {
          cityName: Object.keys(this.c)[0]
      }
  },
  methods: {
      selectThisCity: function(e) {
          if(e.target.checked === true) {
              this.$emit('showCity', this.c);
          } else {
              this.$emit('deleteCity', this.c);
          }
      }
  }
}
</script>

<style scoped>
#category {
    display: inline;
    margin-right: 20px;
}
</style>


