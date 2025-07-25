// блок с цифрами
function scroll_block_1() {
    container = document.getElementById('numbers-block');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    let yOffset = pinSpacer.offsetHeight - 380;
    const rect = fcTtl.getBoundingClientRect();


    if (window.innerWidth < 1200) {
        yOffset = pinSpacer.offsetHeight - 250
    }

    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: `top top+=350`,
        end: `+=${yOffset}`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "sticky";
                fcTtl.style.top = "300px";
                fcTtl.style.zIndex = "999";
                fcTtl.style.bottom = "";
                pinSpacer.style.paddingTop = '70%'
            }
        }
    });
    ScrollTrigger.create({
        trigger: container,
        start: `+=${yOffset} top+=350`,
        scrub: true,

        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = "";
                if (window.innerWidth < 1200 && window.innerWidth > 1100) {
                    fcTtl.style.bottom = "275px";
                    pinSpacer.style.paddingTop = `calc(70% + 180px)`
                } else if (window.innerWidth < 1100) {
                    fcTtl.style.bottom = "260px";
                    pinSpacer.style.paddingTop = `calc(70% + 160px)`
                } else {
                    fcTtl.style.bottom = "350px";
                    pinSpacer.style.paddingTop = `calc(70% + 200px)`
                }


            }
        }
    });

    const containers = document.querySelectorAll('.fadeTextBlock');
    containers.forEach(container => {
        const fcTtl = container.querySelector('.fc_ttl');
        // Анимация для fadeText
        ScrollTrigger.batch(".fadeTextBlock", {
            onEnter: (batch) => gsap.to(batch, {
                opacity: 0,
                filter: "blur(10px)",
                stagger: 0.1,
                duration: 0.7,
            }),
            onLeaveBack: (batch) => gsap.to(batch, {
                opacity: 1,
                filter: "blur(0px)",
                stagger: 0.1,
                duration: 0.2,
            }),
            start: () => `+=${fcTtl.offsetHeight + 400}`,
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            batchMax: 10,
            batchMin: 1,
        });
    });
}

// первая ОС
function scroll_block_2() {
    container = document.getElementById('os-1');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    const yOffset = pinSpacer.offsetHeight - 400;
    const rect = fcTtl.getBoundingClientRect();

    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: "top top+=450",
        end: `+=${yOffset + 150}`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "sticky";
                fcTtl.style.top = "300px";
                fcTtl.style.width = `${rect.width}px`;
                fcTtl.style.zIndex = "999";
                fcTtl.style.bottom = "";
                pinSpacer.style.paddingTop = '70%'
            }
        }
    });
    ScrollTrigger.create({
        trigger: container,
        start: `+=${yOffset + 150} top+=450`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = "";
                if (window.innerWidth > 1800) {
                    fcTtl.style.bottom = "420px";
                    pinSpacer.style.paddingTop = `calc(70% + 190px)`
                }
                else if (window.innerWidth < 1200 && window.innerWidth > 1100) {
                    fcTtl.style.bottom = "390px";
                    pinSpacer.style.paddingTop = `calc(70% + 190px)`
                } else if (window.innerWidth < 1100) {
                    fcTtl.style.bottom = "375px";
                    pinSpacer.style.paddingTop = `calc(70% + 180px)`
                } else {
                    fcTtl.style.bottom = "400px";
                    pinSpacer.style.paddingTop = `calc(70% + 180px)`
                }


            }

        }
    });
}

// наша команда
function scroll_block_3() {
    container = document.getElementById('our-command');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    let yOffset = pinSpacer.offsetHeight - 400;


    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: "top top+=450",
        end: `+=${yOffset}`,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "sticky";
                fcTtl.style.top = "300px";
                fcTtl.style.zIndex = "999";
                fcTtl.style.bottom = "";
                pinSpacer.style.paddingTop = '70%'
            }
        }
    });
    ScrollTrigger.create({
        trigger: container,
        start: `+=${yOffset} top+=450`,
        end: `+=${yOffset}`,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = "";
                if (window.innerWidth > 1500 ) {
                    fcTtl.style.bottom = "880px";
                    pinSpacer.style.paddingTop = `calc(70% + 300px)`
                }
                else if (window.innerWidth < 1500 && window.innerWidth > 1400) {
                    fcTtl.style.top = "650px";
                    pinSpacer.style.paddingTop = `calc(70% + 250px)`
                }
                else if (window.innerWidth < 1400 && window.innerWidth > 1200) {
                    fcTtl.style.bottom = "850px";
                    pinSpacer.style.paddingTop = `calc(70% + 300px)`
                }
                else {
                    fcTtl.style.bottom = "780px";
                    pinSpacer.style.paddingTop = `calc(70% + 300px)`
                }


            }
        }
    });
    const fade = container.querySelector('.mini-container');
    ScrollTrigger.create({
        trigger: fade,
        start: () => `+=${pinSpacer.offsetHeight} top+=350`,
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: (batch) => gsap.to(batch, {
            opacity: 0,
            filter: "blur(10px)",
            stagger: 0.1,
            duration: 0.7,
        }),
        onLeaveBack: (batch) => gsap.to(batch, {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.1,
            duration: 0.2,
        }),
    });


}
gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 990) {
        scroll_block_1();
        scroll_block_2();
        scroll_block_3();
    }
});

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});