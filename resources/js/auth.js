import './bootstrap';

import '@admin-lte/plugins/jquery/jquery.min.js';
import '@admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '@admin-lte/dist/js/adminlte.min.js';


/* $(function(){
    console.log('test');
}); */

/* $(function () {
    // Handler for navigation links click event
    $(document).on('click', 'a.link', function (e) {
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

    // Handle user login
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize form data

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'), // Use the form's action attribute
            data: formData,
            beforeSend: function () {
                $('#loginButton').prop('disabled', true).text('Signing In...'); // Disable button and change text
            },
            success: function (response) {
                // Simulate a delay for demonstration purposes
                setTimeout(function () {
                    if (response.success) {
                        window.location.href = response.redirect; // Redirect to the dashboard
                    } else {
                        $('.login-card-body').prepend(`
                            <div class="alert alert-danger" id="errorAlert">${response.message}</div>
                        `);
                        // Fade out the error alert after 5 seconds
                        setTimeout(function () {
                            $('#errorAlert').fadeOut('slow');
                        }, 5000);
                    }
                }, 2000); // 2-second delay
            },
            error: function (xhr) {
                // Simulate a delay for demonstration purposes
                setTimeout(function () {
                    let errorMessage;

                    if (xhr.status === 401) {
                        // Handle 401 Unauthorized error
                        errorMessage = xhr.responseJSON.message;
                    } else {
                        // Handle other errors
                        let errors = xhr.responseJSON.errors;
                        errorMessage = 'An error occurred. Please try again.';

                        if (errors) {
                            errorMessage = errors[Object.keys(errors)[0]][0];
                        }
                    }

                    $('.login-card-body').prepend(`
                        <div class="alert alert-danger" id="errorAlert">${errorMessage}</div>
                    `);
                    // Fade out the error alert after 5 seconds
                    setTimeout(function () {
                        $('#errorAlert').fadeOut('slow');
                    }, 5000);
                }, 2000); // 2-second delay
            },
            complete: function () {
                $('#loginButton').prop('disabled', false).text('Sign In'); // Re-enable button and reset text
            }
        });
    });


    function loadContent(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (response) {
                // Update content area with the HTML content received from the AJAX response
                $('.content-wrapper').html(response);

                // Update document title based on the title received from the AJAX response
                var newTitle = $(response).filter('title').text();
                if (newTitle) {
                    $('head title').text(newTitle);
                }
            }
        });
    }
}); */
