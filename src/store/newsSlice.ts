import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsArticle } from "../types/NewsArticle";

const apiKey = import.meta.env.VITE_NYT_API_KEY;

export const fetchNews = createAsyncThunk<NewsArticle[], string>(
  "news/fetchNews",
  async (section) => {
    let url = "";

    if (section === "trending") {
      // Most Viewed API (last 1 day)
      url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;
    } else {
      url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
    }

    const response = await axios.get(url);
    return response.data.results;
  }
);

interface NewsState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    resetNewsState: (state) => {
      state.articles = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch news.";
      });
  },
});

export default newsSlice.reducer;
export const { resetNewsState } = newsSlice.actions;
