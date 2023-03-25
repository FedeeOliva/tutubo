import { useState, useEffect, useReducer } from "react";
import { fetchVideos } from "../services/fetchVideos";
import { unrepeated } from "../helpers/unrepeated";

export const reducer = (state, action) => {
  switch (action.type) {   
    case "NEW_SEARCH_INIT":
      return {
        ...state,
        isLoading: true,
        error: false,
        videos: [],
      };
    case "NEW_SEARCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        videos: action.payload.items,
        nextToken: action.payload.nextPageToken,
      };
    case "NEW_SEARCH_FAIL":
    case "NEW_PAGE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "NEW_PAGE_INIT":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "NEW_PAGE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        videos: action.payload.items,
        nextToken: action.payload.nextPageToken,
      };
  }
};

const useVideos = (keyword) => {
  const [state, dispatch] = useReducer(reducer, {
    videos: [],
    nextToken: "",
    isLoading: true,
    error: false,
  });

  const { videos, nextToken, isLoading, error } = state;

  useEffect(() => {
    if (keyword === undefined) return;
    newSearch(keyword);
    // eslint-disable-next-line
  }, [keyword]);

  const newSearch = async (keyword) => {
    dispatch({
      type: "NEW_SEARCH_INIT",
    });
    try {
      const res = await fetchVideos(keyword);
      dispatch({
        type: "NEW_SEARCH_SUCCESS",
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: "NEW_SEARCH_FAIL",
        payload: e,
      });
    }
  };

  const getNextPage = async () => {
    if (isLoading || !nextToken) return;
    dispatch({
      type: "NEW_PAGE_INIT",
    });
    try {
      const res = await fetchVideos(keyword, nextToken);
      const unrepeatedVideos = unrepeated(videos, res.items);
      res.items = unrepeatedVideos;
      dispatch({
        type: "NEW_PAGE_SUCCESS",
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: "NEW_PAGE_FAIL",
        payload: e,
      });
    }
  };

  const thereIsNextPage = nextToken ? true : false;

  return { videos, isLoading, thereIsNextPage, error, getNextPage };
};

export default useVideos;
