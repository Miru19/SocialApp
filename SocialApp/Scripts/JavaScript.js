$(document).ready(function () {
    $('.btnFollow').click(function (event) {
        alert(event.target.id + ' followed!! :D');
        
        var data = JSON.stringify({
            'Email': event.target.id,
            'ToFollow': true,
        });

        $.get({
            url: "/AplicationUsers/FollowOrUnfollowUser?Email=" + event.target.id +"&ToFollow="+true,
            // data: data,
            success: function (result) {
                alert(result);
            },
            error: function () {
                alert("error");
            }
        });
    });
});

$(document).ready(function () {
    $('.btnUnfollow').click(function () {
        alert(event.target.id + ' unfollowed!! :(');

        var data = JSON.stringify({
            'Email': event.target.id,
            'ToFollow': true,
        });
        $.get($('.btnUnfollow').data("url"), function (data) {
            alert(result);
        });
        //$.get({
        //    url: "AplicationUsers/FollowOrUnfollowUser",
        //    // data: data,
        //    success: function (result) {
        //        alert(result);
        //    },
        //    error: function () {
        //        alert("error");
        //    }
        //});
        //$.ajax({
        //    url: "/Home/singleValue",
        //    type: 'GET',
        //    data: { valuetoset: userGuideValue },
        //    success: function (result) {
        //        alert(result);
        //    },
        //    error: function () {
        //        alert("error");
        //    }
        //});
    });
});