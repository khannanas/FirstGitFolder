// to add effect pass element and configurations
/* for configrations we have to type a lot thus we use debug true and gooey true and from browser after setting it we will use it by copy pasting. On mouse ki value change kardi taaki sirf mouse k hover pe chale */
Shery.imageEffect(".back", {style:5, config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0919003115264796},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":1,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, gooey:true})


// Text effect:
/* jab bhi click ho main pe kahi bhi function ko run karo, jo function kya karega effect layega barabar */

// selecting all elam
var all_elams=document.querySelectorAll(".elam")

all_elams.forEach(function(elem){
    // selecting all h1s of elem
    var all_h1s = elem.querySelectorAll("h1")

    // 1st h1 is at 0
    var index = 0;

    // to avoid animating during multiple clicks
    var animating=false


    document.querySelector(".main").addEventListener("click", function () {
        if(!animating){
            // jab animating chalra hai to value true hogi wapas animation nhi chalega
            animating = true
            gsap.to(all_h1s[index], {
                // upar bhejo
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    // upar bhejne k baad usko niche wapas leke aao 
                    // console.log(this._targets[0]); ye check karne k kisko target karna hai
                    gsap.set(this._targets[0], { top: "100%" });
                    // khatam hone k baad wapas chalane k liye
                    animating=false
                }
            })
            // index++;/* index bade lekin saare h1 ki length tak */
            index === all_h1s.length - 1 ? (index = 0) : index++;

            gsap.to(all_h1s[index], {
                // niche waale ko upar bhejo
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1
            })
        }
    })
})

