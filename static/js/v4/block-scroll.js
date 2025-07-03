// блок с цифрами
function scroll_block_1(){
    container = document.getElementById('numbers-block');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    const yOffset = pinSpacer.offsetHeight - 380;
    const rect = fcTtl.getBoundingClientRect();
    
    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: "top top+=450",
        end: `+=${yOffset}`,
        scrub: true,
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
        start: `+=${yOffset + 200} top+=450`,
        scrub: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = ""; 
                fcTtl.style.bottom = "350px"; 
                pinSpacer.style.paddingTop = `calc(70% + 200px)`
            }
        }
    });
}

// первая ОС
function scroll_block_2(){
    container = document.getElementById('os-1');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    const yOffset = pinSpacer.offsetHeight - 280;
    const rect = fcTtl.getBoundingClientRect();
    
    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: "top top+=450",
        end: `+=${yOffset}`,
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
        start: `+=${yOffset +150} top+=450`,
        end: `bottom top+=450`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = ""; 
                fcTtl.style.bottom = "400px"; 
                pinSpacer.style.paddingTop = `calc(70% + 200px)`
            }
        }
    });
}

// наша команда
function scroll_block_3(){
    container = document.getElementById('our-command');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    const yOffset = pinSpacer.offsetHeight - 280;
    const rect = fcTtl.getBoundingClientRect();
    
    // Анимация для блока fc_ttl
    ScrollTrigger.create({
        trigger: container,
        start: "top top+=450",
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
        start: `+=${yOffset-150} top+=450`,
        end: `bottom top+=450`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            if (self.progress < 1 && self.progress > 0) {
                fcTtl.style.position = "absolute";
                fcTtl.style.top = ""; 
                fcTtl.style.bottom = "800px"; 
                pinSpacer.style.paddingTop = `calc(70% + 200px)`
            }
        }
    });
    const fade = container.querySelector('.mini-container');
    ScrollTrigger.create({
        trigger: fade,
        start: () => `+=${pinSpacer.offsetHeight} top+=450`,
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
    if (window.innerWidth > 990){
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
                start: () => `+=${fcTtl.offsetHeight + 300}`,   
                end: "bottom top",   
                scrub: true,
                invalidateOnRefresh:true,    
                batchMax: 10,
                batchMin: 1,       
            });
        });

        scroll_block_1();
        scroll_block_2();
        scroll_block_3();
    }
    
});