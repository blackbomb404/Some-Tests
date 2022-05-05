
(function(){
    if(document.querySelector('link[href^=grid]'))
        return;
    
    
    const body = document.querySelector('body');
    const first = document.querySelector('.first');
    
    document.addEventListener('DOMContentLoaded', resizeEventHandler)
    window.addEventListener('resize', resizeEventHandler);
    
    function resizeEventHandler(e) {
        let { marginTop, marginBottom, height } = getComputedStyle(first);
        let { height: bodyHeight, borderTop: bodyBorderTop, borderBottom: bodyBorderBottom } = getComputedStyle(body);
    
        [marginTop, marginBottom, height, bodyHeight, bodyBorderTop, bodyBorderBottom] = 
        [marginTop, marginBottom, height, bodyHeight, bodyBorderTop, bodyBorderBottom].map(
            item => parseInt(item.substring(0, item.length - 2))
        );
        
        // alert('bodyHeight: ' + (bodyHeight - bodyBorderTop - bodyBorderBottom) + '\nheight: ' + (height + marginTop + marginBottom));
    
        if(bodyHeight - bodyBorderTop - bodyBorderBottom > height + marginTop + marginBottom){
            body.classList.add('flex-centered');
        } else {
            body.classList.remove('flex-centered');
        }
    }

})()