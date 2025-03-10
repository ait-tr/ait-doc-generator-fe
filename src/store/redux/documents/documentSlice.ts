import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Document, DocumentState } from "./types"

const initialState: DocumentState = {
  documents: [],
  activeDocument: null,
}

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    addDocument: (state, action: PayloadAction<Document>) => {
      state.documents.push(action.payload)
    },
    updateDocument: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const doc = state.documents.find(d => d.id === action.payload.id)
      if (doc) {
        doc.content = action.payload.content
      }
    },
    deleteDocument: (state, action: PayloadAction<string>) => {
      state.documents = state.documents.filter(d => d.id !== action.payload)
    },
    setActiveDocument: (state, action: PayloadAction<string>) => {
      state.activeDocument =
        state.documents.find(d => d.id === action.payload) || null
    },
  },
})

export const {
  addDocument,
  updateDocument,
  deleteDocument,
  setActiveDocument,
} = documentSlice.actions
export default documentSlice.reducer
