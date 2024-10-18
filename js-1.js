// function toggleFullScreen() {
//     const element = document.documentElement;
//     const button = document.getElementById('enter-button');
  
//     if (element.requestFullscreen) {
//       element.requestFullscreen();
//       button.parentNode.removeChild(button);
//     } else if (element.mozRequestFullScreen) { /* Firefox */
//         element.mozRequestFullScreen();
//     } else if (element.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
//         element.webkitRequestFullscreen();
//     } else if (element.msRequestFullscreen) { /* IE/Edge */
//         element.msRequestFullscreen();
//     }
//   }


async function toggleFullScreen() {
    const element = document.documentElement;
  
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { /* Firefox */
        await element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
        await element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        await element.msRequestFullscreen();
      }
  
      const button = document.getElementById('enter-button');
      button.parentNode.removeChild(button);
    } catch (error) {
      console.error('Error entering full-screen mode:', error);
    }
  }