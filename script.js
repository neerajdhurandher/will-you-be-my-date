const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// Show popup on 'Yes' button click
yesBtn.addEventListener('click', () => {
    wrapper.classList.add('hide');
    popup.classList.add('show');
});

// Add event listener to close button
closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
    wrapper.classList.remove('hide');
});
