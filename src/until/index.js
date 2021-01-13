export function screenSize(el) {
      let screenWidth = document.body.clientWidth||document.documentElement.clientWidth;
      let srceenHeight = document.body.clientHeight || document.documentElement.clientHeight;
      
      let defWidth = 1920;
      let defheight = 1200;

      let xScale = screenWidth/defWidth;
      let yScale = srceenHeight/defheight;

      el.style.cssText+=`;transform: scale(${xScale},${yScale})`

      window.onresize = ()=>{
        el.style.cssText+=`;transform: scale(${xScale},${yScale})`
      }
}
