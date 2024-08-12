import { DefaultStoreName } from "@/utils/constant";
import { Repository } from "@frontend-types/repository.interface";
import { RepositoryState } from "@frontend-types/state.type";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepositories } from "./api-actions";
// Начальное состояние хранилища
const initialState: RepositoryState = {
  repositories: null,
  currentRepository: null,
  isLoading: false,
  hasError: false
};
// Слайс редьюсера для работы с репозиториями
export const repositoryData = createSlice({
  name: DefaultStoreName.Reducer,
  initialState,
  reducers: {
    // Действие по выбору отдельного репозитория для отображения информации
    setCurrentRepository: (state, action: PayloadAction<Repository|null>) => {
      state.currentRepository = action.payload;
    },
  },
  // Функции обновляющие состояние в результате выполнения действия на определенном этапе
  extraReducers(builder) {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchRepositories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export const { setCurrentRepository } = repositoryData.actions;
