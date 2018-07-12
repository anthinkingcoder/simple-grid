<template>
  <div id="app">
    <Row class="demo">
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
    </Row>

    <Row class="demo">
      <Col :span="4" :offset="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
    </Row>
    <Row class="demo">
      <Col :span="4"  class="demo-col">col</Col>
      <Col :span="8" :offset="4" :push="4" class="demo-col">col</Col>
    </Row>

    <Row class="demo">
      <Col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Col</Col>
      <Col :xs="20" :sm="16" :md="12" :lg="8" class="demo-col">Col</Col>
      <Col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Col</Col>
    </Row>

    <Row>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
      <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
    </Row>

  </div>
</template>
<script>
  import Row from './components/row.vue';
  import Col from './components/col.vue';
  export default {
    name: 'App',
    components: {
      Row,
      Col
    }
  }
</script>
<style>
  .demo-col {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .demo-col:nth-child(odd) {
    background-color: aqua;
  }
  .demo-col:nth-child(even) {
    background-color: aquamarine;
  }
</style>
