export type GenericStateStatus = 'pending' | 'loading' | 'success' | 'error';
export interface GenericState<T> {
    data: T | null;
    error: string | null;
    status: GenericStateStatus;
}
