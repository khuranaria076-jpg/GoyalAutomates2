/* =========================================================
   MOBILE NAV: hamburger opens/closes the Home/Industries/
   Contact panel; tapping any link inside it closes it again.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {

    hamburger.addEventListener('click', function () {

      var isOpen = navLinks.classList.toggle('nav-open');

      hamburger.classList.toggle('is-active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);

    });

    navLinks.querySelectorAll('a').forEach(function (link) {

      link.addEventListener('click', function () {

        navLinks.classList.remove('nav-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');

      });

    });

  }


  /* =======================================================
     3D MODELS / MACHINERY TRACKS: tapping a track pauses its
     auto-scroll so a touch-screen visitor can freely drag to
     orbit/zoom a model; tapping again resumes the scroll.
     (Desktop already pauses on hover via CSS.)
     ======================================================= */

  document.querySelectorAll('.model-track, .machine-track').forEach(function (track) {

    track.addEventListener('click', function () {

      track.classList.toggle('is-paused');

    });

  });

});