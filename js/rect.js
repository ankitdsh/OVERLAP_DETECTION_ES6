export default class Rectangle {

    constructor(x1, y1, width, height, fillColor = "blue") {
        this.x1 = x1
        this.y1 = y1

        this.x2 = width + x1
        this.y2 = height + y1

        this.width = width
        this.height = height

        this.fillColor = fillColor

    }
    addFillColor(color) {
        this.fillColor = color
    }

    doesRectCollide(rect) {
        if (
            this.x2 < rect.x1 ||
            rect.x2 < this.x1 ||
            this.y2 < rect.y1 ||
            rect.y2 < this.y1
        ) return false

        return true
    }

    shadeIntersectRect(rect, canvas, shadeColor = "yellow") {
        canvas.context.fillStyle = shadeColor

        let x1 = Math.max(rect.x1, this.x1)
        let x2 = Math.min(rect.x2, this.x2)
        let y1 = Math.max(rect.y1, this.y1)
        let y2 = Math.min(rect.y2, this.y2)

        canvas.context.fillRect(x1, y1, x2 - x1, y2 - y1)

    }

    getIntersectArea(rect) {
        let x1 = Math.max(rect.x1, this.x1)
        let x2 = Math.min(rect.x2, this.x2)
        let y1 = Math.max(rect.y1, this.y1)
        let y2 = Math.min(rect.y2, this.y2)

        let ΔX = Math.abs(x2 - x1)
        let ΔY = Math.abs(y2 - y1)

        return ΔX * ΔY

    }

    getArea() {
        let ΔX = Math.abs(this.x2 - this.x1)
        let ΔY = Math.abs(this.y2 - this.y1)

        return ΔX * ΔY
    }

    draw(ctx) {
        ctx.fillStyle = this.fillColor
        ctx.fillRect(this.x1, this.y1, this.width, this.height)
    }
}