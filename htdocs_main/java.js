$(document).ready(function() {
    const raiderLogo = $('#raiderLogo'); // Ensure this targets only the RaiderLogo image

    function toggleBlurEffect() {
        // Check if any collapses are open
        if ($('.multi-collapse.show').length > 0) {
            raiderLogo.addClass('blur-darken');
        } else {
            raiderLogo.removeClass('blur-darken');
        }
    }

    $('#learn-more-cotten, #learn-more-koleszar').on('click', function() {
        const targetId = $(this).attr('href');

        // Close all collapses
        $('.multi-collapse').collapse('hide');

        // Open the selected collapse
        $(targetId).collapse('show');
    });

    // Listen for collapse events to manage blur and darkening effect
    $('.collapse').on('hidden.bs.collapse shown.bs.collapse', function() {
        toggleBlurEffect();
    });

    // Check if elements with .has-animation are in the viewport
    function checkAnimation() {
        $('.has-animation').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).delay($(this).data('delay')).queue(function() {
                    $(this).addClass('animate-in');
                });
            }
        });
    }


    // Initial check
    checkAnimation();

    // Check on scroll
    $(window).on('scroll', function() {
        checkAnimation();
    });

    // Update image opacity based on scroll position
    function updateImageOpacity() {
        const scrollPosition = window.scrollY; // Get current scroll position
        const windowHeight = window.innerHeight; // Get height of the window
        const image = document.getElementById('spinningImage');

        // Calculate opacity based on scroll position
        let opacity = (scrollPosition / windowHeight) * 10; // Normalize scroll position

        // Limit opacity to between 0 and 1
        opacity = Math.max(0, Math.min(1, opacity));

        // Set image opacity
        image.style.opacity = opacity;
    }

    // Initial opacity update
    updateImageOpacity();

    // Update opacity on scroll
    window.addEventListener('scroll', function() {
        updateImageOpacity();
    });
});