// Import necessary functions
import { pomodoroInfo } from '../script.js';
import createCounter from './createCounter.js';

// Function to create pomodoro settings UI elements
export default function createPomodoroSettings() {
  // Create a container element to hold all the settings
  const container = document.createElement('div');

  // Create individual counter elements for each pomodoro setting using the imported createCounter function
  container.appendChild(
    createCounter(pomodoroInfo, 'focusDuration', 'Focus Duration (minutes)', 10)
  );
  container.appendChild(
    createCounter(
      pomodoroInfo,
      'shortBreakDuration',
      'Short Break Duration (minutes)',
      10
    )
  );
  container.appendChild(
    createCounter(pomodoroInfo, 'pomodoroCount', 'Number of Pomodoros', 10)
  );
  container.appendChild(
    createCounter(
      pomodoroInfo,
      'longBreakDuration',
      'Long Break Duration (minutes)',
      10
    )
  );
  container.appendChild(
    createCounter(
      pomodoroInfo,
      'pomodorosUntilLongBreak',
      'Pomodoros Until Long Break',
      10
    )
  );

  // Return the container element containing all the pomodoro settings UI elements
  return container;
}
