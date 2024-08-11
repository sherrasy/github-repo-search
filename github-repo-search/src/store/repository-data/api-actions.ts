import { adaptRepositoriesToClient } from "@/utils/adapterToClient";
import { REDUCER_NAME } from "@/utils/constant";
import { RepositoriesData, Repository } from "@frontend-types/repository.interface";
import { AppDispatch, State } from '@frontend-types/state.type';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionName } from '@utils/constant';
import { AxiosInstance } from 'axios';

// Асинхронное действие для получения списка репозиториев по искомой строке
export const fetchRepositories = createAsyncThunk<
  Repository[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${REDUCER_NAME}/${ActionName.FetchRepositories}`,
  async (query, { extra: api }) => {
    try {
      const { data } = await api.get<RepositoriesData>(`repositories?q=${query}&per_page=100`);
      return adaptRepositoriesToClient(data.items);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);