export enum DocumentType {
    inventarisation,
}
export enum DocumentState {
    pending,
    accepted,
    canceled,
}

export interface Document {
    id: number;
    number: string;
    type: DocumentType;
    state: DocumentType;
    date: Date;
}
