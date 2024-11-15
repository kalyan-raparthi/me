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
    // SHOW_PROJECTS
    const anchor_1 = document.createElement('a');
    anchor_1.href = 'https://www.google.com';
    anchor_1.textContent = 'SHOW_PROJECTS';
    const container = document.getElementById('content'); 
    // ADVANCED_C_REF
    const anchor_2 = document.createElement('a');
    anchor_2.href = 'C_REF.html';
    anchor_2.textContent = 'ADVANCED_C_REF';
    const container = document.getElementById('content'); 
    
    contentDiv.appendChild(heading);  
    contentDiv.appendChild(anchor_1);
    contentDiv.appendChild(anchor_2);
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
