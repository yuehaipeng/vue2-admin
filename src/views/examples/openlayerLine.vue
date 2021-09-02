<template>
  <div id="map">

  </div>
</template>

<script>
import {Map, View} from 'ol'
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
export default {
  name: "openlayerLine",
  data(){
    return {
      map:null,
    }
  },
  mounted() {
    this.initMap();

  },
  methods:{
    initMap(){
      //1:渲染容器
      this.map = new Map({target:'map'});
      //准备图层数据源
      let source = new OSM();
      //实例化图层
      let layers = new TileLayer({source:source});
      //2：渲染图层
      this.map.addLayer(layers);
      // 3：设置视图
      let view = new View({center:[12695188.633152978, 2596407.46532453],zoom:18});
      this.map.setView(view);
      this.map.on('click',function (event) {
       console.log(event.coordinate)
      })
    }
  }
}
</script>

<style scoped>
#map{
  width: 900px;
  height: 500px;
}
</style>