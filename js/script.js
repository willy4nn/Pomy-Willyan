// Getting DOM elements
const pomodoroDisplay = document.querySelector('.pomodoro-display');
const pomodoroSettings = document.querySelector('.pomodoro-settings');

// Object that will contain information about the pomodoro to be created
// This object will be used both by the function that will manipulate its values and by the function that will create the pomodoro based on its data
const pomodoroInfo = {
  focusDuration: 0, // Duration of the focus interval in minutes
  shortBreakDuration: 0, // Duration of the short break in minutes
  completedPomodoros: 0, // Total number of completed pomodoros
  longBreakDuration: 0, // Duration of the long break in minutes
  pomodorosUntilLongBreak: 0, // Number of pomodoros before the long break
};