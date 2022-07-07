<template>
  <div class="input">
    <input :id="id" :placeholder="placeholder" v-model="valueModel" class="input__main"/>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.input__main
  border-radius: 10px
  padding: 8px
  border: 1px solid
  width: 100%
  cursor: text

.input__main:hover 
  border: 1px solid #4682B4
</style>
