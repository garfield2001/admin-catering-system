import '@admin-lte/plugins/jquery/jquery.min.js';
import '@admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '@admin-lte/dist/js/adminlte.min.js';


$(function () {
    // Handler for navigation links click event
    $(document).on('click', 'a.link', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        loadContent(url);
        window.history.pushState({
            path: url
        }, '', url); // Update browser history
    });

    // Handler for breadcrumb links click event
    $(document).on('click', '.breadcrumb-item a', function (e) {
        e.preventDefault(); // Prevent default behavior of anchor tag
        var url = $(this).attr('href'); // Get the URL from the anchor tag
        loadContent(url); // Load content via AJAX
        window.history.pushState({
            path: url
        }, '', url); // Update browser history
    });

    // Handler for browser back/forward button click event
    window.onpopstate = function (event) {
        if (event.state) {
            loadContent(event.state.path);
        }
    };

    // Initial check for active link on page load
    var initialTitle = $('head title').text();
    var initialPage = $('a[data-page="' + initialTitle.toLowerCase() + '"]');
    initialPage.addClass('active'); // Add 'active' class to current page link
});

function loadContent(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            // Update content area with the HTML content received from the AJAX response
            $('.content-wrapper').html($(data).find('.content-wrapper').html());

            // Update document title based on the title received from the AJAX response
            var newTitle = $(data).filter('title').text();
            if (newTitle) {
                $('head title').text(newTitle);
            }

            // Update the active state of navigation links based on the new title
            var currentPage = $('a[data-page="' + newTitle.toLowerCase() + '"]');
            $('.link').removeClass('active');
            currentPage.addClass('active');
        }
    });
}