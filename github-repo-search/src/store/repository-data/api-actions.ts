// import { adaptRepositoriesToClient } from "@/utils/adapterToClient";
import { REDUCER_NAME } from "@/utils/constant";
import { RepositoriesData, Repository } from "@frontend-types/repository.interface";
import { AppDispatch, State } from '@frontend-types/state.type';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionName } from '@utils/constant';
import { GraphQLClient } from "graphql-request";
import SearchRepositories  from "./search-query.graphql";
import { adaptRepositoriesToClient } from "@/utils/adapterToClient";

// Асинхронное действие для получения списка репозиториев по искомой строке
export const fetchRepositories = createAsyncThunk<
  Repository[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: GraphQLClient;
  }
>(
  `${REDUCER_NAME}/${ActionName.FetchRepositories}`,
  async (searchString, { extra: api }) => {
    try {
      const data = await api.request<RepositoriesData>(SearchRepositories, {searchString});
      return adaptRepositoriesToClient(data.search.edges);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);