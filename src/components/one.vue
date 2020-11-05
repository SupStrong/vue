<template>
    <div>
        <div id="map" style="width:500px;height:500px" class="map-x"></div>
    </div>
</template>
<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
export default {
    data(){
        return {
            map: null,
        };
    },
    mounted() {
        this.init()
    },
    methods:{
       init(){
            this.map = new Map({
                layers: [
                    new TileLayer({
                    source: new OSM(),
                })],
                target: 'map',
                view: new View({
                    projection: "EPSG:4326",    //使用这个坐标系
                    center: [104.704968,31.540962],  //西南科技大学
                    zoom: 15
                }),
            });
       }
    }
}
</script>>
