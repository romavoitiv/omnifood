
const headerEl = document.querySelector('.header');

// handle current year
const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();

// Handle nav-open
const header = document.querySelector('.header');
const navBtn = document.querySelector('.header__nav-btn');
navBtn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// handle smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el.scrollIntoView({
        behavior: "smooth"
      })
    }

    if (link.classList.contains('header__nav-link')) {

      headerEl.classList.remove('nav-open');
    }
  })
})

// Fixed Navigation
const sectionHeroEl = document.querySelector('.hero__section');
const observer = new IntersectionObserver(function (entries) {
  const entry = entries[0];
  const outOfSight = entry.isIntersecting === false;
  document.body.classList.toggle('fixed', outOfSight);
}, {
  // null means in the viewport
  root: null,
  // threshold of 0 means that cb will be called when the element becomes not visible
  // and fully visible if 1.
  threshold: 0,
  rootMargin: '-80px'
})
observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/