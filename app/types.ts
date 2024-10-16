

interface Filter {
    label: string;
    isActive: boolean;
}

export interface Variant {
    imageUrl: string;
    imageCaption: string;
}
export interface State {
    id: string;
    index: number;
    filters: Filter[];
    variants: Variant[];
}