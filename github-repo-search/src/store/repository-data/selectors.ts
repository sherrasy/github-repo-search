import { Repository } from '@/types/repository.interface';
import { State } from '@frontend-types/state.type';

// Селекторы для получения каждого из полей хранилища
export const getIsLoading = (state: State ): boolean => state.isLoading;
export const getHasError = (state: State ): boolean => state.hasError;
export const getRepositories = (state: State ): Repository[]|null => state.repositories;
export const getCurrentRepository = (state: State ): Repository|null => state.currentRepository;
