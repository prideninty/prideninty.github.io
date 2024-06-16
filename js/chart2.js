var dom = document.getElementById( 'chart2' );
var myChart = echarts.init( dom, null, {
	renderer: 'Canvas',
	useDirtyRect: false
} );
var app = {};
var option;

option = {
	tooltip: {
		trigger: 'item'
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
		top: '5%',
		left: 'center',
		textStyle: {
				      fontSize: 10,
				      color: "#fff"
				    },

	},
	title: {
		text: "PeopleDaily 在平台发布的内容分类及占比",
		textStyle: {
		      fontSize: 20,
		      color: "#fff"
		    },
	},
	graphic: [ {
			// 上半部分的总数标签  
			type: 'text',
			left: 'center',
			top: '35%', // 根据需要调整位置  
			style: {
				text: 'Facebook视频内容分布', // 你可以动态计算这个值  
				textAlign: 'center',
				fill: '#fff', // 文本颜色  
				fontSize: 15 // 字体大小  
			}
		},
		{
			// 下半部分的总数标签  
			type: 'text',
			left: 'center',
			top: '65%', // 根据需要调整位置  
			style: {
				text: 'Tiktok视频内容分布', // 你可以动态计算这个值  
				textAlign: 'center',
				fill: '#fff', // 文本颜色  
				fontSize: 15 // 字体大小  
			}
		}
	],
	series: [ {
			color: [ '#f89e70', '#F28080', '#5574ff', '#72C3A3', '#FFE0C1', '#3ba272', '#8ca1e9', '#fae5fa', '#fff9af' ],
			name: 'Facebook视频内容分布',
			type: 'pie',
			radius: [ '50%', '70%' ], // 半径范围，控制饼图大小  
			center: [ '50%', '49%' ], // 中心位置，上半部分  
			startAngle: 180, // 开始角度  
			endAngle: 360, // 结束角度  
			label: {
				show: true, // 可选，如果你不需要显示标签  
				position: 'outside' ,// 标签位置 
				color :"#fff"
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '15',
					formatter: '{b}: ({d}%)',
					fontWeight: 'bold'
				},
				itemStyle: {
					                    shadowBlur: 10, // 高亮时扇区的阴影大小  
					                    shadowOffsetX: 0, // 高亮时扇区的阴影X偏移  
					                    shadowColor: 'rgba(0, 0, 0, 0.5)' // 高亮时扇区的阴影颜色  
				},
			},
			data: [ {
					value: 769,
					name: '时政'
				},
				{
					value: 444,
					name: '文娱'
				},
				{
					value: 272,
					name: '科技'
				},
				{
					value: 2777,
					name: '社会'
				},
				{
					value: 87,
					name: '国际新闻'
				},
			]
		},
		{
			name: 'Tiktok视频内容分布',
			type: 'pie',
			radius: [ '50%', '70%' ], // 半径范围，控制饼图大小  
			center: [ '50%', '51%' ], // 中心位置，下半部分  
			startAngle: 0, // 开始角度  
			endAngle: 180, // 结束角度  
			label: {
				show: true, // 可选，如果你不需要显示标签  
				position: 'outside' ,// 标签位置 
				color :"#fff"
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '15',
					formatter: '{b}: ({d}%)',
					fontWeight: 'bold'
				},
				itemStyle: {  
				                    shadowBlur: 10, // 高亮时扇区的阴影大小  
				                    shadowOffsetX: 0, // 高亮时扇区的阴影X偏移  
				                    shadowColor: 'rgba(0, 0, 0, 0.5)' // 高亮时扇区的阴影颜色  
				},
			},
			// 假设这里的数据与上半部分不同  
			data: [ {
					value: 0,
					name: '时政'
				},
				{
					value: 1775,
					name: '文娱'
				},
				{
					value: 24,
					name: '科技'
				},
				{
					value: 117,
					name: '社会'
				},
				{
					value: 14,
					name: '国际新闻'
				},
			]
		}
	]
};

// 使用刚指定的配置项和数据显示图表。  
myChart.setOption( option );


if ( option && typeof option === 'object' ) {
	myChart.setOption( option );
}

window.addEventListener( 'resize', myChart.resize );
					