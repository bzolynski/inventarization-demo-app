export interface InventarisationDocument {
    id: number;
    documentId: number;
    name: string;
    isOpen: boolean; // TODO: consider changing name to pending ????
    base: number; // TODO: what is it?
}
