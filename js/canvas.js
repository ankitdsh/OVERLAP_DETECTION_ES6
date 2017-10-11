let $body = document.body

class Canvas {

    constructor(width, height, fillColor = "#ffffff", borderColor = "#FF0000") {

        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height

        this.fillColor = fillColor
        this.context = this.canvas.getContext('2d')
        this.context.lineWidth = 2
        this.context.strokeStyle = borderColor

        this.mount()
        this.draw()
    }

    mount() {
        $body.prepend(this.canvas)
    }

    addRect(rect) {
        this.context.fillStyle = rect.fillColor
        this.context.fillRect(rect.x1, rect.y1, rect.width, rect.height)

    }

    draw() {
        this.context.fillStyle = this.fillColor
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}

export default Canvas