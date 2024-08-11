import { store } from '@/store';
import { Repository } from './repository.interface';
// Типы используемые для работы с состоянием redux
// ------
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RepositoryState = {
  repositories: Repository[] | null; // список полученных репозиториев
  currentRepository: Repository | null; // выбранный репозиторий для отображения деталей
  isLoading: boolean; // состояние загрузки данных
  hasError: boolean; // состояние ошибки загрузки данных
};
