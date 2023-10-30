var val = true;
function bt() {
    let img0 = document.getElementById('img-0');
    if(val) {
        img0.innerHTML= '<div id="img-0"><img src="/media/qb_img/eixie.png" alt="qb0.jpg"><div class="cc-div"><p class="caption">e i x i e </p><p class="timeposted">[08:10:10:19:2023]</p></div></div>'
        val = false;
    }
    else if(!val){
        val = true;    
        img0.innerHTML = ""    
    }
}
