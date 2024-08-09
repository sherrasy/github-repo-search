import { Repository } from '@/types/repository.interface';
import { State } from '@frontend-types/state.type';

export const getIsAuthorized = (state: State ): boolean => state.isLoading;
export const getRepositories = (state: State ): Repository[]|null => state.repositories;
export const getCurrentRepository = (state: State ): Repository|null => state.currentRepository;
