import type { RootStore, AppDispatch } from "./store";
import { TypedUseSelectorHook,useSelector,useDispatch } from "react-redux";
export const useAppDispatch=()=>useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootStore>=useSelector