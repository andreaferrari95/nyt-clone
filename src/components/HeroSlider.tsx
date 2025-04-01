import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  ["media-metadata"]: MediaMetadata[];
}

interface Article {
  title: string;
  abstract: string;
  url: string;
  media?: Media[];
}

const HeroSlider = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchTop3Popular = async () => {
      const apiKey = import.meta.env.VITE_NYT_API_KEY;
      const response = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
      );
      const top3 = response.data.results.slice(0, 3);
      setArticles(top3);
    };

    fetchTop3Popular();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1000}
        loop={articles.length > 2}
        className="rounded-xl shadow"
      >
        {articles.map((article) => {
          const image = article.media?.[0]?.["media-metadata"]?.[2]?.url || "";

          return (
            <SwiperSlide key={article.url}>
              <div
                className="h-96 bg-cover bg-center flex flex-col justify-end p-6 text-white"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="bg-black/50 p-4 rounded">
                  <h2 className="text-2xl font-bold mb-1">{article.title}</h2>
                  <p className="text-sm">{article.abstract}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-green-400 underline text-sm"
                  >
                    Read full article →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
