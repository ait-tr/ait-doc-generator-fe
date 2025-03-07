import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setActiveDocument } from "../../store/redux/documents/documentSlice";

const DocumentList = () => {
  const documents = useSelector((state: RootState) => state.documents.documents);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Dokumentenliste</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id} onClick={() => dispatch(setActiveDocument(doc.id))}>
            {doc.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
