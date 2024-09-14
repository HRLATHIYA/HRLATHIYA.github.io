document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    const boxes = document.querySelectorAll('.box');

    profilePic.addEventListener('click', () => {
        // Move the profile picture to the top-right corner
        profilePic.classList.add('moved');
        
        // Delay to start showing boxes after the picture has moved
        setTimeout(() => {
            boxes.forEach((box, index) => {
                // Show each box with a delay for staggered appearance
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 300);
            });
        }, 1000); // Match this delay with the profile picture transition time
    });
});
