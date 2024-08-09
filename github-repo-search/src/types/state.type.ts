import { store } from '@/store';
import { Repository } from './repository.interface';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RepositoryState = {
  repositories: Repository[] | null;
  currentRepository: Repository | null;
  isLoading: boolean;
};
