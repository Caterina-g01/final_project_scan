import { createSlice } from "@reduxjs/toolkit";

const publicationsSlice = createSlice({
  name: "publications",
  initialState: {
    histograms: [],
    ids: [],
    documents: [],
    count: 0,
    isResult: false,
    isFetching: false,
    isRequest: false,
    isEmptyResponse: false,
    isNewDocFetching: false,
  },
  reducers: {
    publicationsSummary(state, action) {
      state.histograms = action.payload;
    },
    publicationsIds(state, action) {
      state.ids = action.payload;
    },
    publicationsDocuments(state, action) {
      state.documents = getDocumentsData(action.payload);
      state.count = state.documents.length;
      state.isResult = true;
      state.isFetching = false;
    },
    addDocuments(state, action) {
      state.documents.push(...action.payload);
      state.count = state.documents.length;
    },
    toggleIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    toggleIsRequest(state, action) {
      state.isFetching = action.payload;
    },
    toggleisResult(state, action) {
      state.isResult = action.payload;
    },
    toggleisEmptyResponse(state, action) {
      state.isEmptyResponse = action.payload;
    },
    toggleIsNewDocFetching(state, action) {
      state.isNewDocFetching = action.payload;
    },
  },
});

export const selectHistogramData = (state) => state.publications.histograms;

export const selectDocumentsData = (state) => state.publications.documents;

export const selectDocumentsCount = (state) => state.publications.count;

export const selectIsFetching = (state) => state.publications.isFetching;

export const getDocumentsData = (data) => {
  return data.map((item) => {
    const { ok } = item;
    const { title, content, url, issueDate, id, source, attributes } = ok;
    return {
      id: id,
      title: title.text,
      content: content.markup,
      issueDate: issueDate,
      redirectSourceUrl: url,
      nameSource: source.name,
      wordCount: attributes.wordCount,
    };
  });
};

export const {
  publicationsSummary,
  publicationsIds,
  publicationsDocuments,
  addDocuments,
  toggleIsFetching,
  toggleIsRequest,
  toggleisResult,
  toggleisEmptyResponse,
  toggleIsNewDocFetching,
} = publicationsSlice.actions;

export default publicationsSlice.reducer;
