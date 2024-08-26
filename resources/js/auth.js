import './bootstrap';

import '@admin-lte/plugins/jquery/jquery.min.js';
import '@admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '@admin-lte/dist/js/adminlte.min.js';

/* 
TODO: FIX THIS CODE. TOO MUCH SPAGHETTI FOR SURE!
 */
$(function () {
    // Function to load content via AJAX, now handles both GET and POST
    function loadContent(url, method = 'GET', data = {}) {
        $.ajax({
            url: url,
            method: method,
            data: data,
            success: function (response) {
                if (method === 'POST') {
                    // Handle form submission response
                    if (response.attempt && response.isAjax) {
                        window.location.href = response.page; // Redirect to the dashboard
                    } else {
                        $('.card-body').prepend(`
                            <div class="alert alert-danger" id="errorAlert">${response.page}</div>
                        `);
                        // Fade out the error alert after 5 seconds
                        setTimeout(function () {
                            $('#errorAlert').fadeOut('slow', function () {
                                $(this).remove(); // Remove the alert after fading out
                            });
                        }, 5000);
                    }
                } else {

                    $('.login-box').html(response.page);

                    // Extract and set the new document title
                    var newTitle = $(response.page).filter('title').text();

                    console.log(newTitle);
                    if (newTitle) {
                        $('head title').text(newTitle);
                    }
                }
            },
            error: function () {
                if (method === 'POST') {
                    $('.card-body').prepend(`
                        <div class="alert alert-danger" id="errorAlert">Login failed. Please try again.</div>
                    `);
                    setTimeout(function () {
                        $('#errorAlert').fadeOut('slow', function () {
                            $(this).remove();
                        });
                    }, 5000);
                }
            }
        });
    }

    // Handler for navigation links click event
    $(document).on('click', 'a', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        loadContent(url, 'GET'); // Load content via GET
        window.history.pushState({ path: url }, '', url); // Update browser history
    });

    // Handler for browser back/forward button click event
    window.onpopstate = function (event) {
        if (event.state) {
            loadContent(event.state.path, 'GET'); // Load content via GET
        }
    };

    // Handle user login form submission
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize form data

        // Use loadContent for the POST request
        loadContent($(this).attr('action'), 'POST', formData);
    });
});
