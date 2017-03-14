export interface Book {
  kind: string;
  id: string;
  etag: string;
  description: string;
  volumeInfo: Volume;
}

export interface Volume {
  title: string;
  authors: string[];
  imageLinks: ImageLinks;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
