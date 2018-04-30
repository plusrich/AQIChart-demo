<template>
  <div>
      <div id="main"></div>
  </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import topFiveAirQualityCity from '../../static/topFiveAirQualityCity.js'
import citiesInAQIRange from '../../static/citiesInAQIRange.js'

export default {
  name: 'Chart',
  data() {
        return {
            day: [],
            aqiData: [],
            option: {
                baseOption: {
                    title: [
                        {
                            textStyle: {
                                color: "white",
                                fontFamily: "Microsoft YaHei",
                                //fontStyle: "oblique",
                                //fontWeight: "bolder",
                            },
                            left: "center"
                        },
                        {
                            text: "空气质量Top 5城市",
                            top: 100,
                            left: 50,
                            textStyle: {
                                color: "white",
                                fontSize: 16
                            }
                        },
                        {
                            text: "空气质量比例",
                            top: 180,
                            right: 120,
                            textStyle: {
                                color: "white",
                                fontSize: 16
                            }
                        }
                    ],
                    legend: [
                        {
                            data: ["PM 2.5"],
                            right: 0,
                            bottom: 0,
                            textStyle: {
                                color: "white"
                            }
                        },
                        {
                            top: 260,
                            right: 0,
                            orient: "vertical",
                            data: ["优", "良", "轻度污染", "中度污染", "重度污染"],
                            textStyle: {
                                color: "white"
                            }
                        },
                    ],
                    tooltip: {
                        //trigger: "item"
                    },
                    geo: {
                        map: "china",
                        roam: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#323c48',
                                borderColor: '#111'
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }     
                        }
                    },
                    backgroundColor: "#404a59",
                    visualMap: [
                        {
                            show: true,
                            type: "continuous",
                            min: 0,
                            max: 200,
                            seriesIndex: 0,
                            calculable: true,
                            inRange: {
                                color: ['#50a3ba','#eac736','#d94e5d']
                            },
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        {
                            show: false,
                            type: "continuous",
                            min: 0,
                            max: 200,
                            dimension: 0,
                            seriesIndex: 1,
                            calculable: true,
                            inRange: {
                                color: ['#50a3ba','#eac736','#d94e5d']
                            },
                            textStyle: {
                                color: "#fff"
                            }
                        }
                    ],
                    timeline: {
                        show: true,
                        axisType: "category",
                        autoPlay: true,
                        playInterval: 1000,
                        data: ['2015-01-05', '2015-01-06', '2015-01-07', '2015-01-08'],
                        lineStyle: {
                            color: "white"
                        },
                        label: {
                            color: "white"
                        },
                        controlStyle: {
                            color: "white",
                            borderColor: "white"
                        }
                    },
                    grid: [
                        {
                            show: true,
                            left: 60,
                            top: 170,
                            width: 200,
                            height: 200,
                            borderWidth: 0
                        }
                    ],
                    xAxis: [
                        {
                            type: "value",
                            min: 0,
                            max: 200,
                            splitNumber: 4,
                            splitLine: {
                                show: false
                            },
                            position: "top",
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: "#aaa"
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "category",
                            inverse: true,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: "#aaa"
                            }
                        }
                    ],
                    series: [
                        {
                            name: "PM 2.5",
                            type: "scatter",
                            coordinateSystem: "geo",
                            itemStyle: {
                                color: "white"
                            },
                            tooltip: {
                                formatter: function (params) {
                                    return params.name + ' : ' + params.value[2];
                                }
                            }
                        },
                        {
                            type: "bar"
                        },
                        {
                            type: "pie",
                            radius: "20%",
                            center: [800, 320],
                            color: ['rgb(80,163,186)','rgb(135,176,137)','rgb(232,198,55)','rgb(224,130,76)','rgb(217,78,93)']
                        }
                    ]
                }
            },
        };
  },
  props: {
      locate: {
          type: Array,
          required: true
      }
  },
  computed: {
      coordinates: function() {
          let cors = [];
          for (var ad of this.aqiData) {
              let cor = [];
              for (var l of this.locate) {
                  let city = Object.keys(l)[0];
                  cor.push({
                    name: city,
                    value: [l[city][0], l[city][1], ad[city] ? Number(ad[city]) : '-']
                  })
              }
              cors.push(cor);
          }
          return cors;
      }
  },
  methods: {
      drawChart: function() {
          let myChart = echarts.init(document.getElementById('main'));
          myChart.setOption(this.option, true);
      },
      requestAQIData: function(file) {
          axios.get('../../static/cityAQI/' + file)
          .then( (response) => {
            this.aqiData.push(response.data);
            this.day.push(file.slice(0, -5));
          })
          .catch( (error) => {
            console.log(error);
          })
      }
  },
  mounted: function() {
      axios.get('../../static/china.json')
      .then( (response) => {
          echarts.registerMap('china', response.data);
          this.drawChart();
      }).catch( (error) => {
          console.log(error);
      })
      this.requestAQIData('2015-01-05.json');
      this.requestAQIData('2015-01-06.json');
      this.requestAQIData('2015-01-07.json');
      this.requestAQIData('2015-01-08.json');
      console.log(this.day);
  },
  watch: {
      coordinates: function(newCity) {
          let opts = newCity.map( (nc,index) => {
              let topFive = topFiveAirQualityCity(nc, 'value');
              let cityInRange = citiesInAQIRange(nc, 'value');
              return {
                  title: [
                      {
                          text: this.day[index] + ' 全国部分城市空气质量'
                      },
                      {
                          subtext: this.day[index]
                      },
                      {
                          subtext: this.day[index]
                      },
                  ],
                  yAxis: {
                      data: topFive.map( d => {return d.name} )
                  },
                  series: [
                      {
                          data: nc
                      },
                      {
                          data: topFive.map( d => {return d.value[2]} )
                      },
                      {
                          data: cityInRange
                      }
                  ]
              }
          });
          this.option.options = opts;
          this.drawChart();
      }
  }
}
</script>


<style scoped>
#main {
    width: 1000px;
    height: 540px;
}
</style>

