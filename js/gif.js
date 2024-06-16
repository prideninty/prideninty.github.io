var dom = document.getElementById('gif');
var myChart = echarts.init(dom, null, {
	renderer: 'Canvas',
	useDirtyRect: false
});
var app = {};

var option;
option = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: 'C a t a g o r y',
          fontSize: 60,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#fff',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.6,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 0.7,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 0.9,
              style: {
                fill: 'white'
              }
            }
          ]
        }
      }
    ]
  }
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);