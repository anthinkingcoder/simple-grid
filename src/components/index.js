import Col from './col.vue'
import Row from './row.vue'
import '../styles/grid.scss'
const Grid = {
  install(Vue) {
    Vue.component('Row',Row);
    Vue.component('Col',Col);
  }
};
export default Grid;
export {
  Col,
  Row
}
