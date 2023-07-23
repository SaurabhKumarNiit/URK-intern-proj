
anychart.onDocumentReady(function () {
    // create column chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);
    var series = chart.column([
      ['20', '100'],
      ['Property', '150'],
      ['25', '200'],
      ['Farm House', '250'],
      ['30', '300'],
      ['Home Rent', '350'],
      ['35', '400'],
      ['Medicines', '450'],
      ['40', '500']
    ]);

    // set series tooltip settings
    series.tooltip().titleFormat('{%X}');

    series
      .tooltip()
      .position('center-top')
      .anchor('center-bottom')
      .offsetX(0)
      .offsetY(5)
      .format('${%Value}{groupsSeparator: }');

    // set scale minimum
    chart.yScale().minimum(0);

    // set yAxis labels formatter
    chart.yAxis().labels().format('${%Value}{groupsSeparator: }');

    // tooltips position and interactivity settings
    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    chart.container('container');

    // initiate chart drawing
    chart.draw();
  });


  const container =document.querySelectorAll(".range-slider");

  for(let i=0; i<container.length ;i++){
    const slider=container[i].querySelector(".slider");
    const thumb = container[i].querySelector(".slider-thumb");
    const tooltip=container[i].querySelector(".tooltip");
    const progress=container[i].querySelector(".progress");
  }

  function customSlider(){
    const maxVal=slider.getAttribute("max");
    const val = (slider.value/maxVal) * 100 + "%";

    tooltip.innerHTML=slider.value;
    progress.style.width=val;
    thumb.style.left=val;

  }

  customSlider();

  slider.addEventListner("input",()=>{
    customSlider();
  });