<template>
  <div :class="rowClassList">
    <slot></slot>
  </div>
</template>

<script>
  const ROW_PREFIX = 'simple-row';
  const ROW_FLEX_PREFIX = `${ROW_PREFIX}-flex`;
  export default {
    props: {
      gutter: {
        type: Number
      },
      type: {
        type: String,
        required: false,
        validator: function (value) {
          return ['', 'flex'].indexOf(value) !== -1;
        }
      },
      justify: {
        type: String,
        default: 'start',
        validator: function (value) {
          return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) !== -1;
        },
      },
      align: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
        },
      },
      className: {
        type: String
      },
    },
    data() {
      return {}
    },
    computed: {
      rowClassList() {
        let list = [this.type == 'flex' ? ROW_FLEX_PREFIX : ROW_PREFIX];
        if (this.type === 'flex') {
          list.push({
            [`${ROW_FLEX_PREFIX}-${this.justify}`]: this.justify,
            [`${ROW_FLEX_PREFIX}-${this.align}`]: this.align,
          })
        }
        list.push({[`${this.className}`]: this.className});
        return list;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
