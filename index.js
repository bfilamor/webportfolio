
gsap.registerPlugin(ScrollTrigger);

AOS.init({
    once: true
});
//intro animations start
gsap.set("#devIntroName, #devIntroSubtitle, #siteLogoIntroCont", {
    display:"none"
})
gsap.timeline({
})
    .to("#englishLang", {
        opacity: 1,
        display: "block",
        duration: 0.4
    })
    .to("#englishLang", {
        opacity: 0,
        display: "none",
        duration: 0.4
    })
    .to("#cebuanoLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#cebuanoLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#filipinoLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#filipinoLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#sanskritLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#sanskritLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#romanianLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#romanianLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#japaneseLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#japaneseLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#koreanLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#koreanLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#spanishLang", {
        opacity: 1,
        display: "block",
        duration: 0.2
    })
    .to("#spanishLang", {
        opacity: 0,
        display: "none",
        duration: 0.2
    })
    .to("#devIntroName, #devIntroSubtitle, #introCTACont, #siteLogoIntroCont", {
        display: "block",
        duration: 0.1
    })

    .fromTo("#devIntroName", {
        y: -20,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
        })
    .fromTo("#devIntroSubtitle", {
        y: 20,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
        })
    .fromTo("#siteLogoIntroCont .site-logo", {
        rotation: 45,
        opacity: 0,
    },
        {
            rotation: 0,
            opacity: 1,
        })
    .to("#introBg, #introCTACont", {
        opacity: 1,
    })

    .fromTo("#chevronHolder", {
        display: 'none',
        opacity: 0,
    },
        {
            display: 'block',
            opacity: 0.7,
        })

//dev model pics start
let targets = document.querySelectorAll("#developerPics figure")
let duration = 0.1
let pause = 0.1

let stagger = duration + pause

gsap.timeline({
    scrollTrigger: {
        trigger: "#landing",
        start: "top 5%",
    }
})
    .from(targets, {
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
        }
    })
    .to(targets, {
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
        }
    }, stagger)
    .to('#developerPics figure:first-child', {
        opacity: 1,
        duration: 0.1
    })


gsap.timeline({
    scrollTrigger: {
        trigger: "#landing",
        start: "top 5%",
    }
})
    .fromTo('#meshBg', {
        opacity: 0,
        scale: 0.7,
        delay: 0.2,
        duration: 0.2
    },
        {
            scale: 1,
            opacity: 0.8,
        })




