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
