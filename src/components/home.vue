<template>
  <div id="home">
    <h3 id="title">请选择城市</h3>
    <div>
      <div id="option" v-for="(cities, category) in datas" :key="category">
        <div id="menu" @click="showCityList(category)">
          <h3 id="letter" >{{category.toUpperCase()}}</h3>
          <img id="arrow" 
            :class="[{rotate1: !cityList.includes(category)}, {rotate2: cityList.includes(category)}]" 
            :src='arrow_icon'
          >
        </div>
        <div id="items" v-show="cityList.includes(category)">
          <city v-for="(ct, index) in cities" :key="index" :c="ct" 
            @showCity='showCityOnMap'
            @deleteCity='deleteCityOnMap'
          >
          </city>
        </div>
      </div>
    </div>
    <chart :locate='cityCoordinates'></chart>
  </div>
</template>

<script>
import axios from 'axios'
import city from './city'
import chart from './chart'

export default {
  name: 'Home',
  data() {
    return {
      datas: '',
      cityCoordinates: [],
      arrow_icon: '../../static/arrow.png',
      cityList: []
    }
  },
  methods: {
    showCityOnMap: function(coordinate) {
      this.cityCoordinates.push(coordinate);
    },
    deleteCityOnMap: function(coordinate) {
      for (var i = 0;i < this.cityCoordinates.length;i++) {
        if (coordinate === this.cityCoordinates[i]) {
          this.cityCoordinates.splice(i, 1);
        }
      }
    },
    showCityList: function(category) {
      if (this.cityList.includes(category)) {
        let cate = function(c) {
          return c === category;
        };
        this.cityList.splice(this.cityList.findIndex(cate), 1);
      } else {
        this.cityList.push(category);
      }
    }
  },
  mounted: function() {
    axios.get('../../static/classifiedCoordinates.json')
    .then( (response) => {
      this.datas = response.data;
    })
    .catch( (error) => {
      console.log(error);
    });
  },
  components: {
    city,
    chart,
  }
}
</script>

<style scoped>
#title {
  position: absolute;
  top: 20px;
  margin: 0;
}
#home {
  display: flex;
  justify-content: space-between;
}
#option {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    width: 180px;
    background-color: white;
    border-bottom: 3px solid #F0F8FF;
}
#menu {
  height: 30px;
  width: 180px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
#arrow {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  background-color: red;
}
#letter {
    margin-left: 5px;
    display: inline-block;
}
#items {
  width: 180px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  position: relative;
}
.rotate1 {
  transform: rotate(0);
}
.rotate2 {
  transform: rotate(180deg);
}
</style>


