const button = document.gerElementById('clickBtn');
const messageText = document.gerElementById('message');

button.addEventListener('click', () => {
    messageText.innerText = "ยินดีด้วยครับ! JavaScript ทำงานเชื่อต่อกับหน้าเว็บสำเร็จแล้ว";
});