import { REDUCER_NAME } from "@/utils/constant";
import { Repository } from "@frontend-types/repository.interface";
import { RepositoryState } from "@frontend-types/state.type";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepositories } from "./api-actions";

const initialState: RepositoryState = {
  repositories: null,
  currentRepository: null,
  isLoading: false
};

export const repositoryData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    setCurrentRepository: (state, action: PayloadAction<Repository|null>) => {
      state.currentRepository = action.payload;
      console.log(action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRepositories.rejected, (state) => {
        state.isLoading = false
      })
  }
});

export const { setCurrentRepository } = repositoryData.actions;
