const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => panel.style.viewTransitionName = `conf-${index}`);

filterButtons.forEach(button => {

    button.addEventListener('click', (e) => {

        let panelName = e.target.getAttribute('data-filter');

        updateActiveButton(e.target);

        const viewTransitionBrowserSupportExists = typeof document.startViewTransition == 'function';

        if (viewTransitionBrowserSupportExists) {
            document.startViewTransition(() => filterPanels(panelName));
            return;
        }

        filterPanels(panelName);
    });
});

function updateActiveButton(newButton) {
    filterList.querySelector('.active').classList.remove('active');
    newButton.classList.add('active');
}

function filterPanels(filter) {

    panels.forEach(panel => {

        const panelName = panel.getAttribute('data-panel');

        if (filter == panelName) {
            panel.removeAttribute('hidden');
        } else {
            panel.setAttribute('hidden', '');
        }
    });
}