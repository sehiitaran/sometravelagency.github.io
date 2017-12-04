var panelItem = document.querySelectorAll('.main-nav-item'),
	bodyItem = document.querySelectorAll('.main-nav-sub');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    //show new thingy;
    this.classList.add('main-nav-item-active');
    this.nextElementSibling.classList.add('main-nav-sub-open');
    //hide old thingy
    if (activePanel) {
      activePanel.classList.remove('main-nav-item-active');
      activePanel.nextElementSibling.classList.remove('main-nav-sub-open');
    }
    //update thingy
    activePanel = (activePanel === this) ? 0 : this;
  });
});