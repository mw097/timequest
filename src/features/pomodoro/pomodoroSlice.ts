import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PomodoroState } from '../../types/store';

const initialState: PomodoroState = {
  duration: 25 * 60,
  remaining: 25 * 60,
  isRunning: false,
  mode: 'work',
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    start(state) {
      state.isRunning = true;
    },
    pause(state) {
      state.isRunning = false;
    },
    stop(state) {
      state.isRunning = false;
      state.remaining = state.duration;
    },
    tick(state) {
      if (state.isRunning && state.remaining > 0) {
        state.remaining -= 1;
      }
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
      state.remaining = action.payload;
    },
    setMode(
      state,
      action: PayloadAction<'work' | 'short-break' | 'long-break'>
    ) {
      state.mode = action.payload;
    },
  },
});

export const { setDuration, start, pause, stop, tick } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
