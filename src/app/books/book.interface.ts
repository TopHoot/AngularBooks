export interface Book {
  kind?: string;
  id?: string;
  etag?: string;
  volumeInfo?: Volume;
}

export interface Volume {
  title?: string;
  authors?: string[];
  imageLinks?: ImageLinks;
  description?: string;
}

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
}
