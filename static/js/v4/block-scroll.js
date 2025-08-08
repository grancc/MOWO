let spaceBetweenSides = 30


// блок с цифрами
function scroll_block_1() {
    const container = document.getElementById('numbers-block');
    const fcTtl = container.querySelector('.fc_ttl');
    const pinSpacer = container.querySelector('.block-scroll');
    const pinSpacerChild = pinSpacer.querySelector('.numbers-items')
    let yOffset = pinSpacerChild.offsetHeight + spaceBetweenSides;
    

    ScrollTrigger.create({
        trigger: container,
        start: `top center`,
        end: `bottom-=${yOffset} center`,
        scrub: true,
        onUpdate: (self) => {
            fcTtl.style.position = "sticky";
            fcTtl.style.top = `calc(50% - ${fcTtl.offsetHeight}px)`;
            fcTtl.style.zIndex = "999";
            fcTtl.style.bottom = "";
            pinSpacer.style.paddingTop = '70%'
        }
    });
    ScrollTrigger.create({
        trigger: container,
        start: `bottom-=${yOffset} center`,
        end: `bottom top`,
        scrub: true,
        markers: true,
        onUpdate: (self) => {
            yOffset = pinSpacerChild.offsetHeight + spaceBetweenSides;
            fcTtl.style.position = "absolute";
            fcTtl.style.top = "";
            fcTtl.style.bottom = `${yOffset}px`;
            pinSpacer.style.paddingTop = `calc(70% + ${fcTtl.offsetHeight}px)`

        }
    });


    const containers = document.querySelectorAll('.fadeTextBlock');
    containers.forEach(container => {
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
            start: `bottom-=${yOffset} top+=280`,
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
    container2 = document.getElementById('os-1');
    fcTtl2 = container2.querySelector('.fc_ttl');
    pinSpacer2 = container2.querySelector('.block-scroll');
    const pinSpacerChild2 = pinSpacer2.querySelector('.feedback-form')
    yOffset2 = pinSpacerChild2.offsetHeight + spaceBetweenSides;

    yOffsetForStart = yOffset2
    if (window.innerWidth > 1800){
        yOffsetForStart = yOffset2+70
    }
    
    
    ScrollTrigger.create({
        trigger: container2,
        start: `top center`,
        end: `bottom-=${yOffsetForStart} center`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            fcTtl2.style.position = "sticky";
            fcTtl2.style.top = `calc(50% - ${fcTtl2.offsetHeight}px)`;
            fcTtl2.style.zIndex = "999";
            fcTtl2.style.bottom = "";
            pinSpacer2.style.paddingTop = '70%'
        }
    });
    ScrollTrigger.create({
        trigger: container2,
        start: `bottom-=${yOffsetForStart} center`,
        end: `bottom top`,
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            yOffset2 = pinSpacerChild2.offsetHeight + spaceBetweenSides;
            console.log(yOffset2)
            // if (window.innerWidth > 1500) {
            //     yOffset2 = yOffset2-20
            // }
            fcTtl2.style.position = "absolute";
            fcTtl2.style.top = "";
            fcTtl2.style.bottom = `${yOffset2}px`;
            pinSpacer2.style.paddingTop = `calc(70% + ${fcTtl2.offsetHeight}px)`

        }
    });

    fadeblock = container2.querySelector('.feedback-form')
    ScrollTrigger.batch(fadeblock, {
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
            start: `bottom-=${yOffset2} top+=280`,
            end: "bottom top",
            scrub: true,
            markers: true,
            invalidateOnRefresh: true,
            batchMax: 10,
            batchMin: 1,
        });
}

// наша команда
function scroll_block_3() {
    container2 = document.getElementById('our-command');
    const fcTtl2 = container2.querySelector('.fc_ttl');
    const pinSpacer2 = container2.querySelector('.block-scroll');
    const pinSpacerChild2 = pinSpacer2.querySelector('.employee-items')
    yOffset2 = pinSpacerChild2.offsetHeight + spaceBetweenSides;
    yOffsetForStart = yOffset2
    if (window.innerWidth > 1800){
        yOffsetForStart = yOffset2+70
    }

    // Анимация для блока fc_ttl
   ScrollTrigger.create({
        trigger: container2,
        start: `top center`,
        end: `bottom-=${yOffsetForStart} center`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            fcTtl2.style.position = "sticky";
            fcTtl2.style.top = `calc(50% - ${fcTtl2.offsetHeight}px)`;
            fcTtl2.style.zIndex = "999";
            fcTtl2.style.bottom = "";
            pinSpacer2.style.paddingTop = '70%'
        }
    });
    ScrollTrigger.create({
        trigger: container2,
        start: `bottom-=${yOffsetForStart} center`,
        end: `bottom top`,
        scrub: true,
        markers: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            yOffset2 = pinSpacerChild2.offsetHeight + spaceBetweenSides;
            fcTtl2.style.position = "absolute";
            fcTtl2.style.top = "";
            fcTtl2.style.bottom = `${yOffset2}px`;
            pinSpacer2.style.paddingTop = `calc(70% + ${fcTtl2.offsetHeight}px)`

        }
    });
    const fade = container2.querySelector('.mini-container');
    ScrollTrigger.batch(fade, {
        start: () => `bottom-=200 top+=280`,
        end: "bottom top",
        scrub: true,
        markers: true,
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

