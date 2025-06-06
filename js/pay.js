
//

const chatBtn = document.getElementById('chat-btn');
const chatPanel = document.getElementById('chat-panel');

chatBtn.addEventListener('click', () => {
    chatPanel.classList.toggle('show');
});

// Optional: Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!chatBtn.contains(e.target) && !chatPanel.contains(e.target)) {
        chatPanel.classList.remove('show');
    }
});

