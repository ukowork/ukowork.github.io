$(document).ready(function () {
    document.querySelector('#scroll-down').addEventListener("click", scrollDown);
    document.querySelector('#scroll-top').addEventListener("click", scrollUP);
    //

    $(window).on('scroll', function () {
        //
        let fastElement = $('.scroll_fast');
        //let fastElement = document.querySelectorAll('.scroll_fast');
        //
        // https://developer.mozilla.org/zh-TW/docs/Web/API/window/requestAnimationFrame
        window.requestAnimationFrame(function () {
            // 綁定在有 class 的每個元素上
            for (let i = 0; i < fastElement.length; i++) {
                let currentElement = fastElement.eq(i);
                //
                let windowTop = $(window).scrollTop(), // 瀏覽器網頁最高點 到 網頁真實最高點 的距離 = 滾動量
                    elementTop = currentElement.offset().top, // 元素到瀏覽器最高點的距離
                    elementHeight = currentElement.height(), // 元素本體高度
                    // 可視高 = 瀏覽器網頁高 * 0.5 減 元素本體高 * 0.5
                    viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                    scrolled = windowTop - elementTop + viewPortHeight; // 偏移量 = 滾動量 減掉 元素到瀏覽器最高點的距離 加上 可視高
                // 還不太明白為什麼要這樣算
                // 動態計算 transform 3d 的 y 位移 並指定給 dom
                currentElement.css({
                    transform: 'translate3d(0,' + scrolled * -0.55 + 'px, 0)'
                });
            }
        });
        //
        // ----------------------------------------
        // 滾到相應處才撥放動畫

        let windowTop = $(window).scrollTop();
        console.log('windowTop: ' + windowTop);
        //
        let el = ['.prd-title-block .block-title',
                  '.prd-content-block .prd-img img',
                  '.prd-content-block .prd-text h1',
                  '.prd-content-block .prd-text p:nth-child(2)',
                  '.prd-content-block .prd-text p:nth-child(3)',
                  '.prd-content-block button'];
        //
        if (windowTop >= 200) {
            for (let i = 0; i < el.length; i++) {
                document.querySelector('#prd_1 ' + el[i]).classList.add('fade-up-top');
            }
        }
        if (windowTop >= 1300) {
            for (let i = 0; i < el.length; i++) {
                document.querySelector('#prd_2 ' + el[i]).classList.add('fade-up-top');
            }
        }
    });
});


function scrollDown(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    //
    window.scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

function scrollUP() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
