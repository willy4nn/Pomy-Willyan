// Function to create counters
export default function createCounter(object, property, title, max) {
  // Check if the object has the given property
  if (!(property in object)) {
    throw new Error(`The object does not have the property "${property}"`);
  } else {
    // Main container element
    const container = document.createElement('div');

    // Title element
    const titleElement = document.createElement('span');
    titleElement.innerText = title;

    // Counter container element
    const counterElement = document.createElement('div');

    // Counter display element
    const countDisplay = document.createElement('div');
    countDisplay.innerText = object[property];

    // Increment button
    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';
    incrementButton.addEventListener('click', increment);

    // Decrement button
    const decrementButton = document.createElement('button');
    decrementButton.innerText = '-';
    decrementButton.addEventListener('click', decrement);

    // Increment function
    function increment() {
      if (object[property] < max) {
        object[property]++;
        countDisplay.innerText = object[property];
      }
    }

    // Decrement function
    function decrement() {
      if (object[property] > 1) {
        object[property]--;
        countDisplay.innerText = object[property];
      }
    }

    // Add elements to counter container
    counterElement.appendChild(incrementButton);
    counterElement.appendChild(countDisplay);
    counterElement.appendChild(decrementButton);

    // Add elements to main container
    container.appendChild(titleElement);
    container.appendChild(counterElement);

    return container;
  }
}
