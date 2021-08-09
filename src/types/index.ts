export interface Geolocation {
    latitude: number;
    longitude: number;
};

export interface Image {
    url: string,
}

export interface Price{
    price: number,
}

export interface Product {
    id: string;
    title: string;
    images: Array<Image>;
    quantity: number;
    productVariants: Array<Price>;
};



