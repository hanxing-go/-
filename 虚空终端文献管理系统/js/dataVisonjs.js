$(window).load(function () { $(".loading").fadeOut() })
$(function () {

    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        // 要记得修改数据
        var salvProName = [
            "安徽省",
            "河南省",
            "浙江省",
            "湖北省",
            "贵州省",
            "江西省",
            "江苏省",
            "四川省",
            "云南省",
            "湖南省",
        ];
        var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
        var salvProMax = []; //背景按最大值
        for (let i = 0; i < salvProValue.length; i++) {
            salvProMax.push(salvProValue[0]);
        }
        option = {
            //   backgroundColor: "#003366",
            grid: {
                left: "2%",
                right: "2%",
                bottom: "2%",
                top: "2%",
                containLabel: true,
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "none",
                },
                formatter: function (params) {
                    return params[0].name + " : " + params[0].value;
                },
            },
            xAxis: {
                show: false,
                type: "value",
            },
            yAxis: [
                {
                    type: "category",
                    inverse: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#fff",
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    data: salvProName,
                },
                {
                    type: "category",
                    inverse: true,
                    axisTick: "none",
                    axisLine: "none",
                    show: true,
                    axisLabel: {
                        textStyle: {
                            color: "#ffffff",
                            fontSize: "12",
                        },
                    },
                    data: salvProValue,
                },
            ],
            series: [
                {
                    name: "值",
                    type: "bar",
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 30,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(57,89,255,0.6)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(46,200,207,0.6)",
                                },
                            ]),
                        },
                    },
                    barWidth: 20,
                    data: salvProValue,
                },
                {
                    name: "背景",
                    type: "bar",
                    barWidth: 20,
                    barGap: "-100%",
                    data: salvProMax,
                    itemStyle: {
                        normal: {
                            color: "rgba(24,31,68,0.44)",
                            barBorderRadius: 30,
                        },
                    },
                },
            ],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            grid: {
                left: '10',
                top: '20',
                right: '30',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,



            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 16,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        type: 'dotted',
                    }
                }
            }],
            series: [
                {
                    name: '访客人数',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: 'rgba(31, 174, 234, 1)',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(31, 174, 234, 0.8)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(31, 174, 234, 0.3)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1f7eea',
                            borderColor: 'rgba(31, 174, 234, .3)',
                            borderWidth: 5
                        }
                    },
                    data: [3, 6, 3, 6, 3, 9, 3, 12, 6, 8, 3, 5, 9, 3]

                },

            ]

        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        // Enable data zoom when user click bar.
        var zoomSize = 6;
        myChart.on("click", function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: "dataZoom",
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                    dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
            });
        });
        var option = {
            grid: {
                left: '0',
                top: '30',
                right: '0',
                bottom: '10',
                containLabel: true
            },
            legend: {
                top: 0,
                textStyle: {
                    color: "#fff",
                },
                itemWidth: 10,  // 设置宽度
                itemHeight: 10, // 设置高度
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            xAxis: {
                type: 'category',
                data: ["7天前", "6天前", "5天前","4天前", "3天前", "2天前","1天前"],
                axisTick: { //---坐标轴 刻度
                    show: true, //---是否显示
                },
                axisLine: { //---坐标轴 轴线
                    show: true, //---是否显示
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 1,
                        type: 'dotted',
                    },
                },
                axisLabel: {//X轴文字
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                },
            },

            yAxis: {
                type: 'value',
                splitLine: {//分割线
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 1,
                        type: 'dotted'
                    }

                },
                axisLabel: {//Y轴刻度值
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                },
                axisLine: { //---坐标轴 轴线
                    show: false, //---是否显示
                },

            },
            series: [{
                name: '订阅数',
                type: 'bar',
                data: [3, 7, 4,3, 7, 4,8],
                barWidth: 15,
                barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: "#446ACF",
                    }

                },

            }, {

                name: '星标数',
                type: 'bar',
                data: [6, 2, 5,4,6,3,10],
                barWidth: 15, //柱图宽度
                itemStyle: {
                    normal: { //设置颜色的渐变
                        barBorderRadius: 50,
                        color: "#4fb69d",
                    }
                },
            }]

        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.5)'
                },
                top: '20%',
                right: 30,
                data: ['计算机视觉', 'Java', '数据库', '自然语言处理']
            },
            color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },

            calculable: true,
            series: [
                {

                    type: 'pie',
                    radius: [20, 70],
                    center: ["35%", "50%"],
                    roseType: 'area',
                    data: [
                        { value: 300, name: '计算机视觉' },
                        { value: 200, name: 'Java' },
                        { value: 205, name: '自然语言处理' },
                        { value: 180, name: '数据库' },

                    ],
                    label: {
                        normal: {
                            formatter: function (param) {
                                return param.name + ':\n' + param.value + '\n';
                            }

                        }
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 15,
                            lineStyle: { width: 1 }
                        }
                    },

                    itemStyle: {
                        normal: {
                            shadowBlur: 30,
                            shadowColor: 'rgba(0, 0, 0, 0.4)'
                        }

                    },
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    // function echarts_6() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('echart6'));
    //     option = {

    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         radar: [{
    //             indicator: [{
    //                 text: '盈利能力',
    //                 max: 100
    //             }, {
    //                 text: '发展水平',
    //                 max: 100
    //             }, {
    //                 text: '融资能力',
    //                 max: 100
    //             }, {
    //                 text: '技术能力',
    //                 max: 100
    //             }, {
    //                 text: '企业规模',
    //                 max: 100
    //             }],
    //             textStyle: {
    //                 color: 'red'
    //             },
    //             center: ['50%', '50%'],
    //             radius: '70%',
    //             startAngle: 90,
    //             splitNumber: 4,
    //             shape: 'circle',

    //             name: {
    //                 padding: -5,
    //                 formatter: '{value}',
    //                 textStyle: {

    //                     color: 'rgba(255,255,255,.5)'
    //                 }
    //             },
    //             splitArea: {
    //                 areaStyle: {
    //                     color: 'rgba(255,255,255,.05)'
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: 'rgba(255,255,255,.05)'
    //                 }
    //             },
    //             splitLine: {
    //                 lineStyle: {
    //                     color: 'rgba(255,255,255,.05)'
    //                 }
    //             }
    //         },],
    //         series: [{
    //             name: '雷达图',
    //             type: 'radar',
    //             tooltip: {
    //                 trigger: 'item'
    //             },
    //             data: [{
    //                 name: '园区平均值',
    //                 value: [90, 80, 20, 10, 30],
    //                 lineStyle: {
    //                     normal: {
    //                         color: '#03b48e',
    //                         width: 2,
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: '#03b48e',
    //                         opacity: .4
    //                     }
    //                 },
    //                 symbolSize: 0,

    //             }, {
    //                 name: '当前园区',
    //                 value: [30, 20, 75, 80, 70],
    //                 symbolSize: 0,
    //                 lineStyle: {
    //                     normal: {
    //                         color: '#3893e5',
    //                         width: 2,
    //                     }
    //                 },
    //                 areaStyle: {
    //                     normal: {
    //                         color: 'rgba(19, 173, 255, 0.5)'
    //                     }
    //                 }
    //             }]
    //         },]
    //     };
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }
})


















