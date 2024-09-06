import '@admin-lte/plugins/jquery/jquery.min.js';
import '@admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '@admin-lte/dist/js/adminlte.min.js';

/*
TODO: FIX THIS CODE. TOO MUCH SPAGHETTI FOR SURE!
*/

$(function () {
    // Handler for navigation links click event
    $(document).on('click', 'a', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        loadContent(url);
        window.history.pushState({ path: url }, '', url); // Update browser history
    });

    // Handler for browser back/forward button click event
    window.onpopstate = function (event) {
        if (event.state) {
            loadContent(event.state.path);
        }
    };
});

function loadContent(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            $('.login-box').html(data);

            // Update document titl
            $('head title').text($(data).filter('title').text());

        },
        error: function () {
            alert('An error occurred while loading the page.');
        }
    });
}

