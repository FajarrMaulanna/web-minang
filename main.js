//Fitur Javascript untuk kembali ke bagian atas dari halaman html pada saat di refresh
window.onload = function() {
    sessionStorage.removeItem('key');
    document.location.hash = "";
    window.scrollTo(0, 0);
}

//Fitur Javascript untuk memperkecil ukuran navbar pada saat melakukan scroll
window.addEventListener("scroll", function(){
    let nav_bar = document.getElementById('navbar');
    let me_nu = document.getElementById('menu');
    if(window.pageYOffset > 0){
        nav_bar.classList.add("cus-nav");
        me_nu.classList.add("cus-nav");
    }
    else{
        nav_bar.classList.remove("cus-nav");
        me_nu.classList.remove("cus-nav");
    }  
});