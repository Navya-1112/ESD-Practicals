$(document).ready(function () {

    // CHANGE TEXT

    $("#changeBtn").click(function () {

        $("#title").html(
            "Text Changed Using jQuery"
        );

    });

    // HIDE BOX

    $("#hideBtn").click(function () {

        $("#box").hide();

    });

    // SHOW BOX

    $("#showBtn").click(function () {

        $("#box").show();

    });

    // ANIMATE BOX

    $("#animateBtn").click(function () {

        $("#box").animate({

            marginLeft: '250px'

        });

    });

});