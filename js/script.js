var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
    callback_loaded: function (el) {
        let lazyBlock = el.closest('.lazy-block')
        lazyBlock.classList.remove('lazy-block')
    }
});