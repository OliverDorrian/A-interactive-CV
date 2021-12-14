window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
        document.body.style.setProperty(
            "--scroll-per",
            `${(window.pageYOffset / document.body.offsetHeight) * 120}%`
        );
    },
    false
);

window.addEventListener(
    "mousemove",
    (e) => {
        document.documentElement.style.setProperty("--mouse-x", e.clientX);
        document.body.style.setProperty("--mouse-x", e.clientX);
        document.body.style.setProperty("--mouse-y", e.clientY);
        document.body.style.setProperty(
            "--mouse-x-per",
            (e.clientX / document.body.offsetWidth) * 100 + "%"
        );
        document.body.style.setProperty(
            "--mouse-y-per",
            (e.clientY / document.body.offsetHeight) * 100 + "%"
        );
    },
    false
);

const options = {
        threshold: 0.5,
};

const observer = new IntersectionObserver(function (entires, observer) {
        entires.forEach(entry =>{
                if (!entry.isIntersecting){
                     return;
                }
                entry.target.classList.remove("noView");
                entry.target.classList.add("slideIn");
                observer.unobserve(entry.target);
        })
}, options)


const sectionOne = document.querySelectorAll('.view');

sectionOne.forEach(sec =>{
        observer.observe(sec);
})
//Right fade in
const observer2 = new IntersectionObserver(function (entires, observer) {
        entires.forEach(entry =>{
                if (!entry.isIntersecting){
                        return;
                }
                entry.target.classList.remove("noView");
                entry.target.classList.add("slideRight");
                observer.unobserve(entry.target);
        })
}, options)

const sectionTwo = document.querySelectorAll('.slideR')

sectionTwo.forEach(sec2=>{
        observer2.observe(sec2)
})


// Left fade in
const observer3 = new IntersectionObserver(function (entires, observer) {
        entires.forEach(entry =>{
                if (!entry.isIntersecting){
                        return;
                }
                entry.target.classList.remove("noView");
                entry.target.classList.add("slideLeft");
                observer.unobserve(entry.target);
        })
}, options)

const sectionThree = document.querySelectorAll('.slideL')

sectionThree.forEach(sec3=>{
        observer3.observe(sec3)
})


