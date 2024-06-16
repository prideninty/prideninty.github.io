var dom = document.getElementById('chart6');
var myChart = echarts.init(dom, null, {
    renderer: 'Canvas',
	useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
    	top: '5%',
    	left: 'center',
    	textStyle: {
    			      fontSize: 10,
    			      color: "#fff"
    			    },
	},
	title: {
		text: "各媒体在不同平台点赞情况",
		textStyle: {
						      fontSize: 20,
						      color: "#fff"
						    },
	},
	toolbox: {
	    feature: {
	        dataView: {
	            readOnly: true
	        },
	        restore: {},
	        saveAsImage: {}
	    }
	},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
		axisLine: {
		      lineStyle: {
		        color: "#fff"
		      }
		    }
    },
    yAxis: {
        type: 'category',
		axisLine: {
		      lineStyle: {
		        color: "#fff"
		      }
		    },
        data: ['PD(facebook)', 'PD(Tiktok)', 'CD(facebook)', 'CD(Tiktok)', 'CGTN(facebook)', 'CGTN(Tiktok)', 'CCTV(facebook)', 'CCTV(Tiktok)']
    },
    series: [{
			color: [ '#feb49c', '#fd8e6a', '#fc6838', '#fc4105',],
            name: '<100点赞',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
				fontSize:10,
            },
            emphasis: {
                focus: 'series'
            },
            data: [86, 350, 2803, 335, 109, 140, 3787, 402]
        },
        {
			color: [ '#fd8e6a', '#fc6838', '#fc4105',],
            name: '100~500点赞',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
				fontSize:10,
            },
            emphasis: {
                focus: 'series'
            },
            data: [2290, 305, 1954, 117, 25, 273, 1405, 10]
        },
        {
			color: [ '#fc6838', '#fc4105',],
            name: '500~1000点赞',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
				fontSize:10,
            },
            emphasis: {
                focus: 'series',
            },
            data: [1099, 371, 515, 13, 0, 21, 133, 2]
        },
        {
			color: [ '#ed0000',],
            name: '1000点赞以上',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
				fontSize:10,
            },
            emphasis: {
                focus: 'series'
            },
            data: [1298, 890, 507, 21, 0, 127, 98, 1]
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
				