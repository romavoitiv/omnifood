
const headerEl = document.querySelector('.header');

// handle current year
const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();

// Handle burger (nav-open class)
const header = document.querySelector('.header');
const navBtn = document.querySelector('.header__nav-btn');
navBtn.addEventListener('click', function () {
  document.body.parentElement.classList.toggle('nav-open');
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
  console.log(`flexbox supported - ${isSupported}`);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
