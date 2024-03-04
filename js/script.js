// Importing components
import createPomodoroSettings from './pomodoroSettings/createPomodoroSettings.js';

// Selecting DOM elements
const pomodoroDisplay = document.querySelector('.pomodoro-display');
const pomodoroSettings = document.querySelector('.pomodoro-settings');

// Object to store pomodoro information (used for both settings and timer creation)
export const pomodoroInfo = {
  focusDuration: 1, // Duration of the focus interval in minutes
  shortBreakDuration: 1, // Duration of the short break in minutes
  pomodoroCount: 1, // Total number of pomodoros the user wants to complete
  longBreakDuration: 1, // Duration of the long break in minutes
  pomodorosUntilLongBreak: 1, // Number of pomodoros before the long break
};

// Appending settings UI to the page
pomodoroSettings.appendChild(createPomodoroSettings());