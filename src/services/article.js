//this is one part of the state of our global store.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', //this is the base url of the API we are calling
    prepareHeaders: (headers) => {//this is where we can add headers if we need to
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

      return headers;
    }, 
  }),
  // Since we are not sure if a URL a user enters has special weird characters, we need to wrap it in encodeURI
  endpoints: (builder) => ({ //this is the endpoint of the API
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Redux toolkit query automatically creates a hook based out of the defined endpoints
// export const { useGetSummaryQuery } = articleApi; we only do this if we wanted to immediately call it at the start. So we use { useLazyGetSummaryQuery } instead
export const { useLazyGetSummaryQuery } = articleApi; //this is the hook that we will use to call the API. We use lazy because we want to call it only when the user clicks the button.