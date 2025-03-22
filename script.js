document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closePopupButton = document.querySelector('.close');

    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobilePopupButton = document.getElementById('mobile-popup-button');

    function openPopup() {
        if (popup) {
            popup.style.display = 'flex';
        }
    }

    function closePopup() {
        if (popup) {
            popup.style.display = 'none';
        }
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
        if (burgerMenu) {
            burgerMenu.classList.remove('active');
        }
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
    }


    if (document.getElementById('cta-button')) {
        document.getElementById('cta-button').addEventListener('click', openPopup);
    }

    if (document.getElementById('header-button')) {
        document.getElementById('header-button').addEventListener('click', openPopup);
    }

    if (mobilePopupButton) {
        mobilePopupButton.addEventListener('click', function (event) {
            event.stopPropagation(); 
            openPopup();
        });
    }


    if (closePopupButton) {
        closePopupButton.addEventListener('click', closePopup);
    }


    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });


    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
    }


    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }


    document.addEventListener('click', function (event) {
        if (mobileMenu && burgerMenu) {
            if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
                closeMobileMenu();
            }
        }
    });


    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});

