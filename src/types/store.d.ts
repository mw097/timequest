export interface PomodoroState {
  duration: number; // ustawiony czas (w sekundach)
  remaining: number; // pozostały czas
  isRunning: boolean;
  mode: 'work' | 'short-break' | 'long-break';
}
