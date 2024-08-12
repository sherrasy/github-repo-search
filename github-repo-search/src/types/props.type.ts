import { Repository } from './repository.interface';
// Типы аргументов props для копонентов
// ------

// Для результатов в таблице components/result/result.tsx - репозитории
export type ResultProps = {
  repositories: Repository[];
};

// Для деталей в  блоке components/details/detailsInfo.tsx - информация по одному репозиторию
export type DetailsInfoProps = {
  repository: Repository;
};
