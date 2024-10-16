

$(document).ready(function () {
    // Manage the Raider logo's dim state
    const raiderLogo = $('#raiderLogo');

    function setDimmedState(dimmed) {
        if (dimmed) {
            raiderLogo.attr('data-dimmed', 'true');
        } else {
            raiderLogo.attr('data-dimmed', 'false');
        }
    }

    function checkIfAnyOpen() {
        if ($('.multi-collapse.show').length > 0) {
            setDimmedState(true);
        } else {
            setDimmedState(false);
        }
    }

    // Listen to clicks on "Learn More" buttons
    $('.learn-more-btn').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        const targetId = $(this).attr('href');

        // Open the selected collapse and close others
        $('.multi-collapse').not(targetId).collapse('hide');
        $(targetId).collapse('show');
    });

    // Keep mask active if the dropdown is open
    $('.multi-collapse').on('shown.bs.collapse', function () {
        const card = $(this).closest('.card');
        card.addClass('active-mask');
        setDimmedState(true);
    });

    // Remove mask only when all collapses are closed
    $('.multi-collapse').on('hidden.bs.collapse', function () {
        const card = $(this).closest('.card');
        card.removeClass('active-mask');
        checkIfAnyOpen();
    });

    // Ensure mask stays active on hover if the dropdown is open
    $('.card').hover(
        function () {
            if ($(this).find('.multi-collapse.show').length > 0) {
                $(this).addClass('active-mask');
            }
        },
        function () {
            if (!$(this).find('.multi-collapse.show').length) {
                $(this).removeClass('active-mask');
            }
        }
    );

    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

$(document).ready(function () {
  $('.card').hide().each(function (i) {
    $(this).delay(i * 200).fadeIn(500);
  });
});

$(document).ready(function () {
    // Show event cards only when the section is scrolled into view
    $(window).on('scroll', function () {
      const sectionOffset = $('#upcoming-events').offset().top;
      const scrollPosition = $(window).scrollTop() + $(window).height();
  
      if (scrollPosition > sectionOffset) {
        $('.card').hide().each(function (i) {
          $(this).delay(i * 200).fadeIn(500);
        });
      }
    });
  });
  







});