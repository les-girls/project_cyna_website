interface Api<T> {
    success: boolean;
    message: string;
    data: T;
}