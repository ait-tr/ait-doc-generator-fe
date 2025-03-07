export type Document = {
  id: string
  title: string
  content: string
  createdAt: string
}

export type DocumentState = {
  documents: Document[]
  activeDocument?: Document | null
}
