var buttons = document.querySelectorAll('#box .chart-button');  
// 为每个按钮 div 添加点击事件监听器  
buttons.forEach(function(button, index) {  
    button.addEventListener('click', function() {  
        // 隐藏所有图表 div  
        var charts = document.querySelectorAll('.overlapping-div');  
        charts.forEach(function(chart) {
			chart.style.visibility = "hidden"
            chart.style.opacity = '0';  
            chart.style.transition = 'opacity 1s ease-in-out';
        });  
	  
        // 根据按钮的索引显示对应的图表 div  
        var chartIdToShow = 'chart' + (index + 2); // 因为数组索引从0开始，所以+2  
        var chartToShow = document.getElementById(chartIdToShow);  
				 // 立即将图表设置为完全可见，但由于transition的存在，它会逐渐淡入  
				chartToShow.style.opacity = '1';
				chartToShow.style.visibility = "visible"
			      
			 // 如果需要，也可以在这里添加transition回来，以便下一次淡出  
			// chartToShow.style.transition = 'opacity 0.5s ease-in-out';
    }); 
}); 
	