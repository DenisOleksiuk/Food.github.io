function closeModal(modaleSelector) {
    const modal = document.querySelector(modaleSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modaleSelector, modalTimerId) {
    const modal = document.querySelector(modaleSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId)
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modals(triggerSelector, modaleSelector, modalTimerId) {
    //modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modaleSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modaleSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modaleSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modaleSelector);
        }
    });

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modaleSelector, modalTimerId);
            window.removeEventListener('scroll', showModalScroll);
        }
    }

    window.addEventListener('scroll', showModalScroll);
}

export default modals;
export {closeModal, openModal};