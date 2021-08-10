export interface Geolocation {
    latitude: number;
    longitude: number;
};

export interface Product {
    id: string;
    title: string;
    images: Array<{url: string}>;
    quantity: number;
    productVariants: Array<{price: number}>;
};



