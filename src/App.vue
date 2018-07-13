<template>
  <div id="app">
    <Row>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
    </Row>

    <br>

    <Row :gutter="30">
      <Col :span="8">
        <div class="demo-col">gutter</div>
      </Col>
      <Col :span="8">
      <div class="demo-col">gutter</div>
      </Col>
      <Col :span="8">
      <div class="demo-col">gutter</div>
      </Col>
    </Row>
    <br>
    <Row>
      <Col :span="4" :offset="4" class="demo-col">col</Col>
      <Col :span="4" class="demo-col">col</Col>
    </Row>
    <br>
    <Row>
      <Col :span="4"  class="demo-col">col</Col>
      <Col :span="8" :offset="4" :push="4" class="demo-col">col</Col>
    </Row>
    <br>
    <Row>
      <Col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Col</Col>
      <Col :xs="20" :sm="16" :md="12" :lg="8" class="demo-col">Col</Col>
      <Col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Col</Col>
    </Row>
    <br>
    <Row>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
      <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Col</Col>
    </Row>
    <br>
    <Row  type="flex" justify="space-between">
      <Col :span="4" class="demo-col">
          flex
      </Col>
      <Col :span="4" class="demo-col">
      flex
      </Col>
    </Row>
    <br>
    <Row  type="flex" justify="center" align="middle">
      <Col :span="4" class="demo-col">
      flex
      </Col>
      <Col :span="4" class="demo-col demo-col-large">
      flex
      </Col>
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
    height: 40px;
    line-height: 40px;
  }
  .demo-col-large {
    height: 80px;
    line-height: 80px;
  }
  .demo-col, .demo-col-large {
    text-align: center;
  }
  .demo-col:nth-child(odd) {
    background-color: aqua;
  }
  .demo-col:nth-child(even) {
    background-color: aquamarine;
  }
  * {
    margin: 0;
    padding: 0;
  }
</style>
