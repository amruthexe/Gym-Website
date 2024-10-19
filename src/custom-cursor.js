document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.addEventListener('mousedown', () => {
      cursor.style.transform = 'scale(0.8)';
    });
  
    document.addEventListener('mouseup', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
  