export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Volume;
}

export interface Volume {
  title: string;
  authors: string[];
}
