
export interface Node {
    tag?: string
    type?: string
    props?: Record<string, string>
    children: Node[]
  }
  