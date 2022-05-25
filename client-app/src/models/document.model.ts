export enum DocumentType {
    inventarisation,
}

export interface Document {
    id: number;
    documentType: DocumentType;
}
