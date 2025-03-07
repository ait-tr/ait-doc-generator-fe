
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addDocument, setActiveDocument } from "../../store/redux/documents/documentSlice";
import { v4 as uuidv4 } from "uuid";
import { DocumentsWrapper, DocumentItem, CreateButton } from "./styles";
import { RootState } from "../../store/store";

const Documents = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const documents = useAppSelector((state: RootState) => state.documents.documents);


  const handleCreateDocument = () => {
    const newDoc = {
      id: uuidv4(),
      title: "Document-V001",
      content: "",
      createdAt: new Date().toISOString(),
    };
    dispatch(addDocument(newDoc));
  };

  const handleSelectDocument = (id: string) => {
    dispatch(setActiveDocument(id));
    navigate(`/documents/${id}`);
  };

  return (
    <DocumentsWrapper>
      <h1>Dokumente</h1>
      <CreateButton onClick={handleCreateDocument}>Erstelle ein Document</CreateButton>
      <ul>
        {documents.length > 0 ? (
          documents.map((doc) => (
            <DocumentItem key={doc.id} onClick={() => handleSelectDocument(doc.id)}>
              {doc.title} - {new Date(doc.createdAt).toLocaleDateString()}
            </DocumentItem>
          ))
        ) : (
          <p>Keine Dokumente.</p>
        )}
      </ul>
    </DocumentsWrapper>
  );
};

export default Documents;