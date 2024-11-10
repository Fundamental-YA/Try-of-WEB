(()=>{
    var u = class {
        galleryUID;
        items = [];
        constructor(t, r=1) {
            if (window.PhotoSwipe == null || window.PhotoSwipeUI_Default == null) {
                console.error("PhotoSwipe lib not loaded.");
                return
            }
            this.galleryUID = r,
            u.createGallery(t),
            this.loadItems(t),
            this.bindClick()
        }
        loadItems(t) {
            this.items = [];
            let r = t.querySelectorAll("figure.gallery-image");
            for (let i of r) {
                let n = i.querySelector("figcaption")
                  , o = i.querySelector("img")
                  , s = {
                    w: parseInt(o.getAttribute("width")),
                    h: parseInt(o.getAttribute("height")),
                    src: o.src,
                    msrc: o.getAttribute("data-thumb") || o.src,
                    el: i
                };
                n && (s.title = n.innerHTML),
                this.items.push(s)
            }
        }
        static createGallery(t) {
            let r = t.querySelectorAll("img.gallery-image");
            for (let o of Array.from(r)) {
                let s = o.closest("p");
                if (!s || !t.contains(s) || (s.textContent.trim() == "" && s.classList.add("no-text"),
                !s.classList.contains("no-text")))
                    continue;
                let d = o.parentElement.tagName == "A"
                  , m = o
                  , c = document.createElement("figure");
                if (c.style.setProperty("flex-grow", o.getAttribute("data-flex-grow") || "1"),
                c.style.setProperty("flex-basis", o.getAttribute("data-flex-basis") || "0"),
                d && (m = o.parentElement),
                m.parentElement.insertBefore(c, m),
                c.appendChild(m),
                o.hasAttribute("alt")) {
                    let l = document.createElement("figcaption");
                    l.innerText = o.getAttribute("alt"),
                    c.appendChild(l)
                }
                if (!d) {
                    c.className = "gallery-image";
                    let l = document.createElement("a");
                    l.href = o.src,
                    l.setAttribute("target", "_blank"),
                    o.parentNode.insertBefore(l, o),
                    l.appendChild(o)
                }
            }
            let i = t.querySelectorAll("figure.gallery-image")
              , n = [];
            for (let o of i)
                n.length ? o.previousElementSibling === n[n.length - 1] ? n.push(o) : n.length && (u.wrap(n),
                n = [o]) : n = [o];
            n.length > 0 && u.wrap(n)
        }
        static wrap(t) {
            let r = document.createElement("div");
            r.className = "gallery";
            let i = t[0].parentNode
              , n = t[0];
            i.insertBefore(r, n);
            for (let o of t)
                r.appendChild(o)
        }
        open(t) {
            let r = document.querySelector(".pswp");
            new window.PhotoSwipe(r,window.PhotoSwipeUI_Default,this.items,{
                index: t,
                galleryUID: this.galleryUID,
                getThumbBoundsFn: n=>{
                    let o = this.items[n].el.getElementsByTagName("img")[0]
                      , s = window.pageYOffset || document.documentElement.scrollTop
                      , a = o.getBoundingClientRect();
                    return {
                        x: a.left,
                        y: a.top + s,
                        w: a.width
                    }
                }
            }).init()
        }
        bindClick() {
            for (let[t,r] of this.items.entries())
                r.el.querySelector("a").addEventListener("click", n=>{
                    n.preventDefault(),
                    this.open(t)
                }
                )
        }
    }
      , b = u;
    var h = {};
    if (localStorage.hasOwnProperty("StackColorsCache"))
        try {
            h = JSON.parse(localStorage.getItem("StackColorsCache"))
        } catch {
            h = {}
        }
    async function S(e, t, r) {
        if (!e)
            return await Vibrant.from(r).getPalette();
        if (!h.hasOwnProperty(e) || h[e].hash !== t) {
            let i = await Vibrant.from(r).getPalette();
            h[e] = {
                hash: t,
                Vibrant: {
                    hex: i.Vibrant.hex,
                    rgb: i.Vibrant.rgb,
                    bodyTextColor: i.Vibrant.bodyTextColor
                },
                DarkMuted: {
                    hex: i.DarkMuted.hex,
                    rgb: i.DarkMuted.rgb,
                    bodyTextColor: i.DarkMuted.bodyTextColor
                }
            },
            localStorage.setItem("StackColorsCache", JSON.stringify(h))
        }
        return h[e]
    }
    var D = (e,t=500)=>{
        e.classList.add("transiting"),
        e.style.transitionProperty = "height, margin, padding",
        e.style.transitionDuration = t + "ms",
        e.style.height = e.offsetHeight + "px",
        e.offsetHeight,
        e.style.overflow = "hidden",
        e.style.height = "0",
        e.style.paddingTop = "0",
        e.style.paddingBottom = "0",
        e.style.marginTop = "0",
        e.style.marginBottom = "0",
        window.setTimeout(()=>{
            e.classList.remove("show"),
            e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("transiting")
        }
        , t)
    }
      , q = (e,t=500)=>{
        e.classList.add("transiting"),
        e.style.removeProperty("display"),
        e.classList.add("show");
        let r = e.offsetHeight;
        e.style.overflow = "hidden",
        e.style.height = "0",
        e.style.paddingTop = "0",
        e.style.paddingBottom = "0",
        e.style.marginTop = "0",
        e.style.marginBottom = "0",
        e.offsetHeight,
        e.style.transitionProperty = "height, margin, padding",
        e.style.transitionDuration = t + "ms",
        e.style.height = r + "px",
        e.style.removeProperty("padding-top"),
        e.style.removeProperty("padding-bottom"),
        e.style.removeProperty("margin-top"),
        e.style.removeProperty("margin-bottom"),
        window.setTimeout(()=>{
            e.style.removeProperty("height"),
            e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("transiting")
        }
        , t)
    }
      , B = (e,t=500)=>window.getComputedStyle(e).display === "none" ? q(e, t) : D(e, t);
    function v() {
        let e = document.getElementById("toggle-menu");
        e && e.addEventListener("click", ()=>{
            document.getElementById("main-menu").classList.contains("transiting") || (document.body.classList.toggle("show-menu"),
            B(document.getElementById("main-menu"), 300),
            e.classList.toggle("is-active"))
        }
        )
    }
    function N(e, t, r) {
        var i = document.createElement(e);
        for (let n in t)
            if (n && t.hasOwnProperty(n)) {
                let o = t[n];
                n == "dangerouslySetInnerHTML" ? i.innerHTML = o.__html : o === !0 ? i.setAttribute(n, n) : o !== !1 && o != null && i.setAttribute(n, o.toString())
            }
        for (let n = 2; n < arguments.length; n++) {
            let o = arguments[n];
            o && i.appendChild(o.nodeType == null ? document.createTextNode(o.toString()) : o)
        }
        return i
    }
    var w = N;
    var y = class {
        localStorageKey = "StackColorScheme";
        currentScheme;
        systemPreferScheme;
        constructor(t) {
            this.bindMatchMedia(),
            this.currentScheme = this.getSavedScheme(),
            this.dispatchEvent(document.documentElement.dataset.scheme),
            t && this.bindClick(t),
            document.body.style.transition == "" && document.body.style.setProperty("transition", "background-color .3s ease")
        }
        saveScheme() {
            localStorage.setItem(this.localStorageKey, this.currentScheme)
        }
        bindClick(t) {
            t.addEventListener("click", r=>{
                this.isDark() ? this.currentScheme = "light" : this.currentScheme = "dark",
                this.setBodyClass(),
                this.currentScheme == this.systemPreferScheme && (this.currentScheme = "auto"),
                this.saveScheme()
            }
            )
        }
        isDark() {
            return this.currentScheme == "dark" || this.currentScheme == "auto" && this.systemPreferScheme == "dark"
        }
        dispatchEvent(t) {
            let r = new CustomEvent("onColorSchemeChange",{
                detail: t
            });
            window.dispatchEvent(r)
        }
        setBodyClass() {
            this.isDark() ? document.documentElement.dataset.scheme = "dark" : document.documentElement.dataset.scheme = "light",
            this.dispatchEvent(document.documentElement.dataset.scheme)
        }
        getSavedScheme() {
            let t = localStorage.getItem(this.localStorageKey);
            return t == "light" || t == "dark" || t == "auto" ? t : "auto"
        }
        bindMatchMedia() {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t=>{
                t.matches ? this.systemPreferScheme = "dark" : this.systemPreferScheme = "light",
                this.setBodyClass()
            }
            )
        }
    }
      , E = y;
    function g(e) {
        let t;
        return ()=>{
            t && window.cancelAnimationFrame(t),
            t = window.requestAnimationFrame(()=>e())
        }
    }
    var O = ".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]"
      , T = "#TableOfContents"
      , L = "#TableOfContents li"
      , C = "active-class";
    function V(e, t) {
        let r = e.querySelector("a").offsetHeight
          , i = e.offsetTop - t.offsetHeight / 2 + r / 2 - t.offsetTop;
        i < 0 && (i = 0),
        t.scrollTo({
            top: i,
            behavior: "smooth"
        })
    }
    function U(e) {
        let t = {};
        return e.forEach(r=>{
            let n = r.querySelector("a").getAttribute("href");
            n.startsWith("#") && (t[n.slice(1)] = r)
        }
        ),
        t
    }
    function k(e) {
        let t = [];
        return e.forEach(r=>{
            t.push({
                id: r.id,
                offset: r.offsetTop
            })
        }
        ),
        t.sort((r,i)=>r.offset - i.offset),
        t
    }
    function M() {
        let e = document.querySelectorAll(O);
        if (!e) {
            console.warn("No header matched query", e);
            return
        }
        let t = document.querySelector(T);
        if (!t) {
            console.warn("No toc matched query", T);
            return
        }
        let r = document.querySelectorAll(L);
        if (!r) {
            console.warn("No navigation matched query", L);
            return
        }
        let i = k(e)
          , n = !1;
        t.addEventListener("mouseenter", g(()=>n = !0)),
        t.addEventListener("mouseleave", g(()=>n = !1));
        let o, s = U(r);
        function a() {
            let m = document.documentElement.scrollTop || document.body.scrollTop, c;
            i.forEach(p=>{
                m >= p.offset - 20 && (c = document.getElementById(p.id))
            }
            );
            let l;
            c && (l = s[c.id]),
            c && !l ? console.debug("No link found for section", c) : l !== o && (o && o.classList.remove(C),
            l && (l.classList.add(C),
            n || V(l, t)),
            o = l)
        }
        window.addEventListener("scroll", g(a));
        function d() {
            i = k(e),
            a()
        }
        window.addEventListener("resize", g(d))
    }
    var $ = "a[href]";
    function P() {
        document.querySelectorAll($).forEach(e=>{
            e.getAttribute("href").startsWith("#") && e.addEventListener("click", r=>{
                r.preventDefault();
                let i = e.getAttribute("href").substring(1)
                  , n = document.getElementById(i)
                  , o = n.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
                window.history.pushState({}, "", e.getAttribute("href")),
                scrollTo({
                    top: o,
                    behavior: "smooth"
                })
            }
            )
        }
        )
    }
    var x = {
        init: ()=>{
            v();
            let e = document.querySelector(".article-content");
            e && (new b(e),
            P(),
            M());
            let t = document.querySelector(".article-list--tile");
            t && new IntersectionObserver(async(s,a)=>{
                s.forEach(d=>{
                    if (!d.isIntersecting)
                        return;
                    a.unobserve(d.target),
                    d.target.querySelectorAll("article.has-image").forEach(async c=>{
                        let l = c.querySelector("img")
                          , p = l.src
                          , H = l.getAttribute("data-key")
                          , I = l.getAttribute("data-hash")
                          , A = c.querySelector(".article-details")
                          , f = await S(H, I, p);
                        A.style.background = `
                        linear-gradient(0deg, 
                            rgba(${f.DarkMuted.rgb[0]}, ${f.DarkMuted.rgb[1]}, ${f.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${f.Vibrant.rgb[0]}, ${f.Vibrant.rgb[1]}, ${f.Vibrant.rgb[2]}, 0.75) 100%)`
                    }
                    )
                }
                )
            }
            ).observe(t);
            let r = document.querySelectorAll(".article-content div.highlight")
              , i = "Copy"
              , n = "Copied!";
            r.forEach(o=>{
                let s = document.createElement("button");
                s.innerHTML = i,
                s.classList.add("copyCodeButton"),
                o.appendChild(s);
                let a = o.querySelector("code[data-lang]");
                a && s.addEventListener("click", ()=>{
                    navigator.clipboard.writeText(a.textContent).then(()=>{
                        s.textContent = n,
                        setTimeout(()=>{
                            s.textContent = i
                        }
                        , 1e3)
                    }
                    ).catch(d=>{
                        alert(d),
                        console.log("Something went wrong", d)
                    }
                    )
                }
                )
            }
            ),
            new E(document.getElementById("dark-mode-toggle"))
        }
    };
    window.addEventListener("load", ()=>{
        setTimeout(function() {
            x.init()
        }, 0)
    }
    );
    window.Stack = x;
    window.createElement = w;
}
)();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
