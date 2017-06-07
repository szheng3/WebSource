/**
 * Created by zhengshuai on 6/7/17.
 */

$(document).ready(function () {

    $('#someForm').on('submit', function (e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var subject = $('#subject').val();

        var comments = $('#message').val();


        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url: 'https://formspree.io/szheng3@uci.edu',
            method: 'POST',
            data: {
                name: name,
                _replyto: email,
                comments: comments,
                _subject: subject,
            },
            dataType: "json",
            success: function () {
                console.log('success');
                alertify.success("Message sent");
            }

        });

    });

});
