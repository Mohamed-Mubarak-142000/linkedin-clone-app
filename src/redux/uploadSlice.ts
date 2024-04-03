// uploadSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UploadState {
  loading: boolean;
  progress: number;
}

const initialState: UploadState = {
  loading: false,
  progress: 0,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
  },
});

export const { setLoading, setProgress } = uploadSlice.actions;
export default uploadSlice.reducer;
