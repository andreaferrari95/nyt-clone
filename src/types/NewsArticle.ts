export interface NewsArticle {
  title: string;
  abstract: string;
  url: string;
  multimedia?: {
    url: string;
    format: string;
    type: string;
    caption: string;
  }[];
  media?: {
    type: string;
    subtype: string;
    caption: string;
    ["media-metadata"]: {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
  }[];
  published_date?: string;
  byline?: string;
}
