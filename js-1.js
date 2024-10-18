function addParagraph() {
    const contentDiv = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = '[qb]';
    
    
    const paragraph = document.createElement('p');
    paragraph.textContent = '> ';
    
    
    const button = document.createElement('button');
    button.textContent = 'SHOW_PROJECTS';
    button.addEventListener('click',  
        () => {
            
        });
        
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(button);
  
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