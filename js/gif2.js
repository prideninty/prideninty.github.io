var dom = document.getElementById('gif2');
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
        type: 'group',
        left: 'center',
        top: 'center',
        children: new Array(9).fill(0).map((val, i) => ({
          type: 'rect',
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 60
          },
          style: {
            fill: '#fff'
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: 'cubicIn'
              },
              {
                percent: 1,
                scaleY: 1,
                easing: 'cubicOut'
              }
            ]
          }
        }))
      }
    ]
  }
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);