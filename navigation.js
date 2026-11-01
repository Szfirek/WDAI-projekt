(() => {
    const header = document.querySelector('.site-header');
    const menu = document.querySelector('.floating-nav');
    if (!header || !menu) return;

    let scheduled = false;

    function updateMenu() {
        // Reveal only once the full header has scrolled out of view.
        const visible = header.getBoundingClientRect().bottom <= 0;
        menu.classList.toggle('is-visible', visible);
        menu.inert = !visible;
        scheduled = false;
    }

    function scheduleUpdate() {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(updateMenu);
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('pageshow', scheduleUpdate);
    updateMenu();
})();
