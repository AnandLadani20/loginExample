// Get the timeline container and its elements
const timelineContainer = document.querySelector('.timeline-container');
const timelineTrack = document.querySelector('.timeline-track');
const textTimeline = document.querySelector('.text-timeline');
const timelineScrubber = document.querySelector('.timeline-scrubber');
const scrubberHandle = document.querySelector('.scrubber-handle');
const timeDisplay = document.querySelector('.timeline-time-display');

// Set the timeline duration (in seconds)
const timelineDuration = 60; // 1 minute

// Set the timeline marker interval (in seconds)
const markerInterval = 5;

// Generate the timeline markers
for (let i = 0; i <= timelineDuration; i += markerInterval) {
  const marker = document.createElement('div');
  marker.className = 'timeline-marker';
  marker.style.left = `${(i / timelineDuration) * 100}%`;
  timelineTrack.appendChild(marker);
}

// Generate the text timeline elements
for (let i = 0; i < 5; i++) {
  const textElement = document.createElement('div');
  textElement.className = 'text-timeline-element';
  textElement.textContent = `Text ${i + 1}`;
  textElement.style.left = `${(i / 5) * 100}%`;
  textElement.style.width = '50px';
  textTimeline.appendChild(textElement);
}

// // Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//   element.addEventListener('mousedown', (e) => {
//     // Get the mouse position
//     const mouseX = e.clientX;

//     // Add a mousemove event listener to update the element position
//     document.addEventListener('mousemove', (e) => {
//       const elementLeft = mouseX - timelineContainer.offsetLeft;
//       element.style.left = `${elementLeft}px`;
//     });

//     // Add a mouseup event listener to remove the mousemove event listener
//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', null, false);
//     });
//   });

//   // Add a resizer event listener to the element
//   element.addEventListener('mousedown', (e) => {
//     if (e.target === element) return;

//     // Get the resizer element
//     const resizer = e.target;

//     // Get the initial width and left position
//     const initialWidth = parseInt(element.style.width, 10);
//     const initialLeft = parseInt(element.style.left, 10);

//     // Add a mousemove event listener to update the element width
//     document.addEventListener('mousemove', (e) => {
//       const newWidth = initialWidth + (e.clientX - mouseX);
//       element.style.width = `${newWidth}px`;
//       element.style.left = `${initialLeft - (newWidth - initialWidth)}px`;
//     });

//     // Add a mouseup event listener to remove the mousemove event listener
//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', null, false);
//     });
//   });
// });
//...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//   let startX, startY, initialWidth, initialLeft;

//   element.addEventListener('mousedown', (e) => {
//     startX = e.clientX;
//     startY = e.clientY;
//     initialWidth = parseInt(element.style.width, 10);
//     initialLeft = parseInt(element.style.left, 10);

//     document.addEventListener('mousemove', (e) => {
//       const deltaX = e.clientX - startX;
//       const deltaY = e.clientY - startY;

//       // Update the element's left position
//       element.style.left = `${initialLeft + deltaX}px`;

//       // Update the element's width
//       element.style.width = `${initialWidth + deltaX}px`;
//     });

//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', null, false);
//     });
//   });

//   // Add a resizer event listener to the element
//   const resizer = document.createElement('div');
//   resizer.className ='resizer';
//   element.appendChild(resizer);

//   resizer.addEventListener('mousedown', (e) => {
//     startX = e.clientX;
//     startY = e.clientY;
//     initialWidth = parseInt(element.style.width, 10);
//     initialLeft = parseInt(element.style.left, 10);

//     document.addEventListener('mousemove', (e) => {
//       const deltaX = e.clientX - startX;
//       const deltaY = e.clientY - startY;

//       // Update the element's width
//       element.style.width = `${initialWidth + deltaX}px`;
//     });

//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', null, false);
//     });
//   });
// });

//...

//...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//     let startX, startY, initialLeft;
  
//     element.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialLeft = parseInt(element.style.left, 10);
  
//       document.addEventListener('mousemove', (e) => {
//         const deltaX = e.clientX - startX;
//         element.style.left = `${initialLeft + deltaX}px`;
//       });
  
//       document.addEventListener('mouseup', () => {
//         document.removeEventListener('mousemove', null, false);
//       });
//     });
  
//     // Add a resizer event listener to the element
//     const resizer = document.createElement('div');
//     resizer.className ='resizer';
//     element.appendChild(resizer);
  
//     resizer.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialWidth = parseInt(element.style.width, 10);
//       initialLeft = parseInt(element.style.left, 10);
  
//       document.addEventListener('mousemove', (e) => {
//         const deltaX = e.clientX - startX;
//         element.style.width = `${initialWidth + deltaX}px`;
//         element.style.left = `${initialLeft - (deltaX / 2)}px`;
//       });
  
//       document.addEventListener('mouseup', () => {
//         document.removeEventListener('mousemove', null, false);
//       });
//     });
//   });
  
  //...
//...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//     let startX, startY, initialLeft, moveEventListener, upEventListener;
  
//     element.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         element.style.left = `${initialLeft + deltaX}px`;
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
  
//     // Add a resizer event listener to the element
//     const resizer = document.createElement('div');
//     resizer.className ='resizer';
//     element.appendChild(resizer);
  
//     resizer.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialWidth = parseInt(element.style.width, 10);
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         element.style.width = `${initialWidth + deltaX}px`;
//         element.style.left = `${initialLeft - (deltaX / 2)}px`;
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
//   });
  
  //...

  //...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//     let startX, startY, initialWidth, initialLeft, moveEventListener, upEventListener;
  
//     element.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         element.style.left = `${initialLeft + deltaX}px`;
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
  
//     // Add a resizer event listener to the element
//     const resizer = document.createElement('div');
//     resizer.className ='resizer';
//     element.appendChild(resizer);
  
//     resizer.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialWidth = parseInt(element.style.width, 10);
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         const newWidth = initialWidth + deltaX;
//         if (newWidth > 0) {
//           element.style.width = `${newWidth}px`;
//           element.style.left = `${initialLeft - (deltaX / 2)}px`;
//         }
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
//   });
  
  //...

  //...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//     let startX, startY, initialWidth, initialLeft, moveEventListener, upEventListener;
  
//     element.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         const newLeft = initialLeft + deltaX;
//         if (newLeft >= 0 && newLeft <= timelineContainer.offsetWidth - element.offsetWidth) {
//           element.style.left = `${newLeft}px`;
//         }
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
  
//     // Add a resizer event listener to the element
//     const resizer = document.createElement('div');
//     resizer.className ='resizer';
//     element.appendChild(resizer);
  
//     resizer.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialWidth = parseInt(element.style.width, 10);
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         const deltaX = e.clientX - startX;
//         const newWidth = initialWidth + deltaX;
//         if (newWidth > 0 && initialLeft + newWidth <= timelineContainer.offsetWidth) {
//           element.style.width = `${newWidth}px`;
//           element.style.left = `${initialLeft - (deltaX / 2)}px`;
//         }
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
//   });
  
  //...

  //...

// Add event listeners to the text timeline elements
// Array.prototype.forEach.call(textTimeline.children, (element) => {
//     let startX, startY, initialWidth, initialLeft, moveEventListener, upEventListener;
  
//     element.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         if (e.target.closest('.timeline-container')) {
//           const deltaX = e.clientX - startX;
//           const newLeft = initialLeft + deltaX;
//           if (newLeft >= 0 && newLeft <= timelineContainer.offsetWidth - element.offsetWidth) {
//             element.style.left = `${newLeft}px`;
//           }
//         }
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
  
//     // Add a resizer event listener to the element
//     const resizer = document.createElement('div');
//     resizer.className ='resizer';
//     element.appendChild(resizer);
  
//     resizer.addEventListener('mousedown', (e) => {
//       startX = e.clientX;
//       startY = e.clientY;
//       initialWidth = parseInt(element.style.width, 10);
//       initialLeft = parseInt(element.style.left, 10);
  
//       moveEventListener = (e) => {
//         if (e.target.closest('.timeline-container')) {
//           const deltaX = e.clientX - startX;
//           const newWidth = initialWidth + deltaX;
//           if (newWidth > 0 && initialLeft + newWidth <= timelineContainer.offsetWidth) {
//             element.style.width = `${newWidth}px`;
//             element.style.left = `${initialLeft - (deltaX / 2)}px`;
//           }
//         }
//       };
  
//       upEventListener = () => {
//         document.removeEventListener('mousemove', moveEventListener, false);
//         document.removeEventListener('mouseup', upEventListener, false);
//       };
  
//       document.addEventListener('mousemove', moveEventListener, false);
//       document.addEventListener('mouseup', upEventListener, false);
//     });
//   });
  
//...

// Add event listeners to the text timeline elements
Array.prototype.forEach.call(textTimeline.children, (element) => {
    let startX, startY, initialWidth, initialLeft, moveEventListener, upEventListener;
  
    element.addEventListener('mousedown', (e) => {
        
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = parseInt(element.style.left, 10);
  
      moveEventListener = (e) => {
        if (e.target.closest('.timeline-container')) {
          const deltaX = e.clientX - startX;
          const newLeft = initialLeft + deltaX;
          if (newLeft >= 0 && newLeft <= timelineContainer.offsetWidth - element.offsetWidth) {
            element.style.left = `${newLeft}px`;
          }
        }
        upEventListener = () => {
            document.removeEventListener('mousemove', moveEventListener, false);
            document.removeEventListener('mouseup', upEventListener, false);
          };
      };
  
      upEventListener = () => {
        document.removeEventListener('mousemove', moveEventListener, false);
        document.removeEventListener('mouseup', upEventListener, false);
      };
  
      document.addEventListener('mousemove', moveEventListener, false);
      document.addEventListener('mouseup', upEventListener, false);
    });
  
    // Add a resizer event listener to the element
    const resizer = document.createElement('div');
    resizer.className ='resizer';
    element.appendChild(resizer);
  
    resizer.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      startY = e.clientY;
      initialWidth = parseInt(element.style.width, 10);
      initialLeft = parseInt(element.style.left, 10);
  
      moveEventListener = (e) => {
        if (e.target.closest('.timeline-container')) {
          const deltaX = e.clientX - startX;
          const newWidth = initialWidth + deltaX;
          if (newWidth > 0 && initialLeft + newWidth <= timelineContainer.offsetWidth) {
            element.style.width = `${newWidth}px`;
            element.style.left = `${initialLeft - (deltaX / 2)}px`;
          }
        }
      };
  
      upEventListener = () => {
        document.removeEventListener('mousemove', moveEventListener, false);
        document.removeEventListener('mouseup', upEventListener, false);
        // Add a new event listener to the resizer to enable resizing again
        resizer.addEventListener('mousedown', (e) => {
          //...
        });
      };
  
      document.addEventListener('mousemove', moveEventListener, false);
      document.addEventListener('mouseup', upEventListener, false);
    });
  });
  
  //...
  //...

// Add event listeners to the scrubber handle
scrubberHandle.addEventListener('mousedown', (e) => {
  // Get the mouse position
  const mouseX = e.clientX;

  // Add a mousemove event listener to update the scrubber position
  document.addEventListener('mousemove', (e) => {
    const scrubberLeft = mouseX - timelineContainer.offsetLeft;
    scrubberHandle.style.left = `${scrubberLeft}px`;
    updateTimeDisplay(scrubberLeft);
  });

  // Add a mouseup event listener to remove the mousemove event listener
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', null, false);
  });
});

// Update the time display based on the scrubber position
function updateTimeDisplay(scrubberLeft) {
  const time = Math.round((scrubberLeft / timelineContainer.offsetWidth) * timelineDuration);
  timeDisplay.textContent = formatTime(time);
}

// Format the time display
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize the scrubber position and time display
scrubberHandle.style.left = '0px';
updateTimeDisplay(0);