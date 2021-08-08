export interface Geolocation {
    latitude: number;
    longitude: number;
};

export interface Image {
    url: string,
}

export interface Product {
    id: string;
    title: string;
    images: Array<Image>;
};



