interface Point {
  x: number
  y: number
}
interface Line {
  start: Point // 起点
  length: number // 长度
  theta: number // 角度
}
export { Point, Line }