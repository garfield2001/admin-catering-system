import '@admin-lte/plugins/jquery/jquery.min.js';
import '@admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '@admin-lte/dist/js/adminlte.min.js';



$(function () {
    function loadContent(url, method = 'GET', data = {}) {
        $.ajax({
            url: url,
            method: method,
            data: data,
            success: function (response) {
                if (method === 'POST') {
                    if (response.attempt && response.isAjax) {
                        document.open(); // Open the document for writing
                        document.write(response.page); // Replace the entire document with new content
                        document.close();
                        window.history.pushState({ path: url }, '', response.route);
                    } else {
                        $('.card-body').prepend(`
                            <div class="alert alert-danger" id="errorAlert">${response.page}</div>
                        `);
                        setTimeout(function () {
                            $('#errorAlert').fadeOut('slow', function () {
                                $(this).remove();
                            });
                        }, 5000);
                    }
                } else if (method === 'GET') {
                    $('.login-box').html(response.page);
                    var newTitle = $(response.page).filter('title').text();
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


    $('#logout').on('submit', function (e) {
        e.preventDefault();
        let formData = $(this).serialize();
        loadContent($(this).attr('action'), 'POST', formData);
    });
})  