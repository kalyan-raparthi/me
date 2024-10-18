function insertParagraphAfter(elementId, paragraphText) {
    const element = document.getElementById(elementId);
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphText;
  
    element.parentNode.insertBefore(paragraph, element.nextSibling);
}

function addParagraph() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = '[qb]';
    
    const anchor = document.createElement('a');
    anchor.href = 'https://www.google.com';
    anchor.textContent = 'SHOW_PROJECTS';
          const container = document.getElementById('content'); // Replace with your container element ID
    
    contentDiv.appendChild(heading);  
    contentDiv.appendChild(anchor);
}

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
      addParagraph()
    } catch (error) {
      console.error('Error entering full-screen mode:', error);
    }
  }