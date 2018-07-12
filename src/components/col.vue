<template>
  <div :class="colClassList" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  const COL_PREFIX = 'simple-col';
  export default {
    props: {
      span: {
        type: Number
      },
      order: {
        type: Number
      },
      offset: {
        type: Number
      },
      push: {
        type: Number
      },
      pull: {
        type: Number
      },
      xs: {},
      sm: {},
      md: {},
      lg: {},
      className: {}
    },
    data() {
      return {
        '': {
          'span': this.span,
          'order': this.order,
          'offset': this.offset,
          'push': this.push,
          'pull': this.pull
        },
        gutter: 0
      }
    },
    computed: {
      colClassList() {
        let list = [COL_PREFIX];
        let viewports = ['', 'xs', 'sm', 'md', 'lg'];
        viewports.forEach(viewport => {
          let vpName = viewport ? `-${viewport}` : viewport;
          if (typeof this[viewport] === 'object') {
            Object.keys(this[viewport]).forEach(key => {

              if (this[viewport][key]) {
                list.push({[`${COL_PREFIX}-${key}${vpName}-${this[viewport][key]}`]: this[viewport][key]})
              }
            });
          }else {
            list.push({[`${COL_PREFIX}-span-${viewport}-${this[viewport]}`]: this[viewport]})
          }
        });
        return list;
      },
      colStyle() {
        return {
          'padding-left': this.gutter / 2 + 'px',
          'padding-right': this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
