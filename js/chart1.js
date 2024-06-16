var dom = document.getElementById('chart1');
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
			type: 'shadow'
		}
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
	legend: {
		top: '8%',
		left: 'center',
		textStyle: {
				      fontSize: 10,
				      color: "#fff"
				  },
	
	},
	title: {
		text: "选取的主流媒体在短视频平台发布的视频数量",
		left: "center",
		textStyle: {
		      fontSize: 20,
		      color: "#fff"
		    },
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: {
		type: 'value',
		boundaryGap: [0, 0.01],
		axisLine: {
		      lineStyle: {
		        color: "#fff"
		      }
		    }
		
	},
	yAxis: {
		type: 'category',
		data: ['CCTV', 'CGTN', 'ChinaDaily', 'PeopleDaily', ],
		axisLine: {
		      lineStyle: {
		        color: "#fff"
		      }
		    }
	},
	series: [{
			name: 'Facebook',
			type: 'bar',
			color: 'royalblue',
			data: [5424, 5809, 134, 4349],
		},
		{
			name: 'Tiktok',
			type: 'bar',
			color: 'indianred',
			data: [415, 486, 561, 1930],
		},
		
	],
	animationEasing: 'elasticOut',
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);