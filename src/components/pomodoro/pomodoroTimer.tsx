import { useEffect } from 'react';
import { Application, useExtend } from '@pixi/react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import {
  tick,
  start,
  stop,
  pause,
} from '../../features/pomodoro/pomodoroSlice';

export const PomodoroTimer = () => {
  useExtend({});
  const dispatch = useAppDispatch();
  const { remaining, isRunning } = useAppSelector((state) => state.pomodoro);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <Application>
      {/* <Button onClick={() => dispatch(start())} text="Start" />
      <Button onClick={() => dispatch(pause())} text="Pause" />
      <Button onClick={() => dispatch(stop())} text="Stop" /> */}
    </Application>
  );
};
