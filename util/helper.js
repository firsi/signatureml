// const getElementHeight = (element) => {
    //     if (!element) return;
    //     let prevValue = JSON.stringify(element.getBoundingClientRect());
    //     const handle = setInterval(() => {
    //         let nextValue = JSON.stringify(element.getBoundingClientRect());
    //         if(nextValue === prevValue){
    //             clearInterval(handle)
    //             // setTextComponentHeight(element.getBoundingClientRect().height)
    //             return element.getBoundingClientRect().height
    //         }
    //         else{
    //             prevValue = nextValue;
    //         }
    //     }, 100)
    // }

   export function optimizedScrollListener(action) {
        window.addEventListener("scroll", throttleScroll, false);
        let isScrolling = false;
        function throttleScroll(e) {
            if (isScrolling == false ) {
                    requestAnimationFrame(function() {
                    action();
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }
    }
    
    

    export function isVisible(el) {
        if(el===null)return;
        let elementBoundary = el.getBoundingClientRect();
        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height;
        return ((top + height >= 0) &&
        (height + window.innerHeight >= bottom));
        }
    
        