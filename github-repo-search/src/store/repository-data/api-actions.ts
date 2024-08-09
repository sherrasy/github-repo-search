import { Query } from "@frontend-types/query.type";
import { RepositoriesData, Repository } from "@frontend-types/repository.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '@frontend-types/state.type';
import { REDUCER_NAME } from "@/utils/constant";
import { ActionName } from '@utils/constant';
import { adaptRepositoriesToClient } from "@/utils/adapterToClient";

export const fetchRepositories = createAsyncThunk<
  Repository[],
  Query|undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${REDUCER_NAME}/${ActionName.FetchRepositories}`,
  async (query, { extra: api }) => {
    try {
      const { data } = await api.get<RepositoriesData>(`repositories?q=${query? query :'python&sort=stars&order=desc&page=1&per_page=10'}`);
      return adaptRepositoriesToClient(data.items);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);