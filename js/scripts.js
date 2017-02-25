/*
 Author: Foxxel
 Author URI: http://foxxel.com/
 Date: 06/03/2015
 */

$(window).load(function () {
    $('#load').hide();
});

$(document).ready(function () {

    $('.accordion').accordion();

    $(window).scroll(function () {
        var top = $(this).scrollTop();

        if (top >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }

    });

    $('.mobile-menu .menu-icon').click(function () {
        $('.select-menu').attr('size', $('.select-menu option').length);
    });

    $(document).on('click', '.menu .parent i', function (e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });

    $(document).on('click', '.menu-icon', function () {
        $(this).siblings('.menu').slideToggle();
    });

    $('.menu-icon').bind('touchstart', function () {
        $('#nav .menu').slideToggle();
    });

    $('.testimonials').owlCarousel({
        items: 1,
        singleItem: true,
        autoPlay: true,
        pagination: true
    });

    var projects = $('.projects');

    projects.owlCarousel({
        items: projects.data('count'),
        itemsDesktopSmall: [960, 2],
        itemsTablet: [640, 1]
    });

    $('.arrows #next').click(function () {
        projects.trigger('owl.next');
    });

    $('.arrows #prev').click(function () {
        projects.trigger('owl.prev');
    });

    $('.portfolio').mixItUp();
});