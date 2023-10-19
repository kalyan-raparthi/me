function bt() {
    let a = document.getElementById('qb-imgs');
    let val = 1;
    if(val === 1) {
        console.log("ad")
        a.style.height = '0dvw';
        val = 0;
    }
    else {
        console.log("as")
        a.style.height = 'auto';
         val = 1
    }
}
