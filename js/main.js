import Rectangle from './rect.js'
import Canvas from './canvas.js'

try {

	let $total_area = document.querySelector('#totalArea')
	let $intersect_area = document.querySelector('#intersectArea')

    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    document.onmousemove = function(e) {
        rect2.x1 = Math.floor(e.clientX)
        rect2.y1 = Math.floor(e.clientY)

        rect2.x2 = Math.floor(e.clientX + rect2.width)
        rect2.y2 = Math.floor(e.clientY + rect2.height)
    }

    const COLOR_GREEN = 'rgba(0,255,0,0.7)'
    const COLOR_BLUE = 'rgba(0,0,255,0.7)'
    const  COLOR_RED= 'rgba(255,0,0,0.7)'
    const  COLOR_YELLOW= 'rgba(255,255,0,0.9)'

    let canvas = new Canvas(800, 600, 'aqua', '#000f00')

    let rect1 = new Rectangle(100, 100, 300, 300, COLOR_GREEN)
    let rect2 = new Rectangle(0, 0, 50, 50, COLOR_BLUE)

    function render() {
        canvas.clear()
        canvas.draw()
        canvas.addRect(rect1)
        canvas.addRect(rect2)

        let rect1Area = rect1.getArea()
        let rect2Area = rect2.getArea()
        let intersectArea = 0

        if (rect1.doesRectCollide(rect2)) {

            rect1.addFillColor(COLOR_RED)
            rect2.addFillColor(COLOR_RED)
            rect1.shadeIntersectRect(rect2,canvas,COLOR_YELLOW)
            intersectArea =  rect1.getIntersectArea(rect2)
            

        } else {
            rect1.addFillColor(COLOR_GREEN)
            rect2.addFillColor(COLOR_BLUE)
        }


        $total_area.innerText  = rect1Area + rect2Area - intersectArea
        $intersect_area.innerText  = intersectArea

    }

    (function animloop() {
        requestAnimFrame(animloop);
        render();
    })();
} catch (ex) {
    console.log(ex.message)
}