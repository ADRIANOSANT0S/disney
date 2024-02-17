document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeButtonActive()
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeButtonActive() {
    const btns = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}