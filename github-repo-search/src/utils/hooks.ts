import type { State, AppDispatch } from '@frontend-types/state.type';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Функции для вызова хуков dispatch и selector с типизацией без дублирования в компонентах
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;