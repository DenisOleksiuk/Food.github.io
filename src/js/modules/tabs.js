function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabParent = document.querySelector(tabsParentSelector);

    function hiddeTabContent () {
         tabsContent.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
         });

        tabs.forEach(item => {
          item.classList.remove(activeClass);
        });
     }

    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hiddeTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event => {
        const target = event.target;
        
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hiddeTabContent();
                    showTabContent(i);
                }
            });
        }
    }));
};

export default tabs;