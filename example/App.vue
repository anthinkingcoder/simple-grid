<template>
  <div id="app">
    <Row>
      <i-col :span="4" class="demo-col">span:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
    </Row>

    <br>

    <Row :gutter="30">
      <i-col :span="8">
        <div class="demo-col">gutter:30</div>
      </i-col>
      <i-col :span="8">
      <div class="demo-col">gutter:30</div>
      </i-col>
      <i-col :span="8">
      <div class="demo-col">gutter:30</div>
      </i-col>
    </Row>
    <br>
    <Row>
      <i-col :span="4" :offset="4" class="demo-col">offset:4</i-col>
      <i-col :span="4" class="demo-col">span:4</i-col>
    </Row>
    <br>
    <Row>
      <i-col :span="4"  class="demo-col">col</i-col>
      <i-col :span="8" :push="4" class="demo-col">push:4</i-col>
    </Row>
    <br>
    <Row>
      <i-col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Response-Col</i-col>
      <i-col :xs="20" :sm="16" :md="12" :lg="8" class="demo-col">Response-Col</i-col>
      <i-col :xs="2" :sm="4" :md="6" :lg="8" class="demo-col">Response-Col</i-col>
    </Row>
    <br>
    <Row>
      <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Response-Col</i-col>
      <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Response-Col</i-col>
      <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="demo-col">Response-Col</i-col>
    </Row>
    <br>
    <Row  type="flex" justify="space-between">
      <i-col :span="4" class="demo-col">
          flex
      </i-col>
      <i-col :span="4" class="demo-col">
      flex
      </i-col>
    </Row>
    <br>
    <Row  type="flex" justify="center" align="middle">
      <i-col :span="4" class="demo-col">
      flex
      </i-col>
      <i-col :span="4" class="demo-col demo-col-large">
      flex
      </i-col>
    </Row>
    <br>
    <Row  type="flex" justify="center" align="top">
      <i-col :span="4" class="demo-col">
      flex
      </i-col>
      <i-col :span="4" class="demo-col demo-col-large">
      flex
      </i-col>
    </Row>
    <br>
    <Row  type="flex" justify="center" align="bottom">
      <i-col :span="4" class="demo-col">
      flex
      </i-col>
      <i-col :span="4" class="demo-col demo-col-large">
      flex
      </i-col>
    </Row>
    <br>
    <Row  type="flex">
      <i-col :span="4" class="demo-col" :order="2">
      order:2
      </i-col>
      <i-col :span="4" class="demo-col" :order="1">
      order:1
      </i-col>
      <i-col :span="4" class="demo-col" :order="4">
      order:4
      </i-col>
      <i-col :span="4" class="demo-col" :order="5">
      order:5
      </i-col>
      <i-col :span="4" class="demo-col" :order="3">
      order:3
      </i-col>
    </Row>
    <div class="example">

    </div>
    <div w-188-246>

    </div>
    <div w-187-246>

    </div>

    <div class="content">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'App'
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
