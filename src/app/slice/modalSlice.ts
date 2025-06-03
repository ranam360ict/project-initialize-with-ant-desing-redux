import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../store";

export type ModalTypes =
  | {
      title: string | undefined;
      content: React.ReactNode | undefined;
      width?: 600 | 650 | 750 | 800 | 850 | 900 | 950 | 1024 | 1366 | 1920;
    }
  | undefined;

type ModalStateType = ModalTypes & { open: boolean };

const initialState: ModalStateType = {
  open: false,
  title: undefined,
  content: undefined,
  width: 600,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<ModalTypes>) => {
      state.open = true;
      state.title = payload?.title;
      state.content = payload?.content;
      state.width = payload?.width;
    },
    closeModal: (state) => {
      state.open = false;
      state.title = undefined;
      state.content = undefined;
    },
  },
});

export const ModalState = (state: RootState) => state.modal;

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
