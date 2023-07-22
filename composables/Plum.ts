import type { Line, Point } from '../types/plumTypes'

class Plum {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  Threshold: number // 概率
  THETA: number // 角度
  depth: number // 最低深度
  paddintTasks: Function[] = []
  frameCount = 0
  maxFrameCount = 80
  constructor(canvas: HTMLCanvasElement, Threshold = 0.5, THETA = 0.4, depth = 5) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.Threshold = Threshold
    this.THETA = THETA
    this.depth = depth
  }

  private lineTo(p1: Point, p2: Point, color = '#d8d8d8') {
    this.ctx?.beginPath()
    this.ctx?.moveTo(p1.x, p1.y)
    this.ctx?.lineTo(p2.x, p2.y)
    this.ctx?.stroke()
    this.ctx.strokeStyle = color
  }

  private getEndPoint(l: Line): Point {
    const { start, length, theta } = l
    return {
      x: start.x + length * Math.cos(theta),
      y: start.y + length * Math.sin(theta)
    }
  }

  private drawBranch(l: Line) {
    const { start } = l
    const end = this.getEndPoint(l)
    this.lineTo(start, end)
  }

  private step(branch: Line, depth = 0) {
    const end = this.getEndPoint(branch)
    this.drawBranch(branch)
    if (depth < this.depth || Math.random() > this.Threshold) {
      const leftBranch = {
        start: end,
        length: branch.length + (Math.random() * 10 - 5),
        theta: branch.theta - this.THETA * Math.random()
      }
      this.paddintTasks.push(() => this.step(leftBranch, depth + 1))
    }

    if (depth < this.depth || Math.random() > this.Threshold) {
      const rightBranch = {
        start: end,
        length: branch.length + (Math.random() * 10 - 5),
        theta: branch.theta + this.THETA * Math.random()
      }
      this.paddintTasks.push(() => this.step(rightBranch, depth + 1))
    }
  }

  private frame() {
    const tasks = [...this.paddintTasks]
    this.paddintTasks.length = 0
    tasks.forEach((fn) => fn())
  }

  startPlum(branch: Line) {
    this.step(branch)
    if (process.client) {
      requestAnimationFrame(() => {
        this.frameCount += 1
        if (this.frameCount % 4 === 0 && this.frameCount < this.maxFrameCount) {
          this.frame()
        }
        this.startPlum(branch)
      })
    }
  }
}
export default Plum