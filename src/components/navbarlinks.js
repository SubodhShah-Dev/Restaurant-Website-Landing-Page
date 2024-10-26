// Just for practicing JavaScript.
// Better to include this in all the html files directly instead.

function navbarLinksFiller() {
  const navLinksList = document.getElementById('navLinksList');
  const pageUrl = document.URL;
  const path = pageUrl.split('/');

  const navigationPagesName = ['Home', 'About us', 'Menu', 'Contact us'];
  const navigationPages = navigationPagesName.map((e) =>
    e.toLowerCase().split(' ').join('')
  );
  navigationPages[0] = 'index';

  for (let index = 0; index < navigationPages.length; index++) {
    if (navigationPages[index] === 'index') {
      navLinksList.innerHTML += `<li class="navLink">
                <a class="${navLinkHoverEffect(index)} cursor-pointer" href="/${navigationPages[index]}.html"
                  >${navigationPagesName[index]}</a
                >
              </li>`;
    } else {
      navLinksList.innerHTML += `<li class="navLink">
    <a class="${navLinkHoverEffect(index)} cursor-pointer" href="/src/pages/${navigationPages[index]}.html"
      >${navigationPagesName[index]}</a
    >
  </li>`;
    }
  }

  // Update this in the future if URL changes

  // After clicking any of the navLinks in src/pages
  function navLinkHoverEffect(index) {
    const isPathEqual = `${path[5]}` === `${navigationPages[index]}.html`;
    if (isPathEqual) {
      return 'textGradient';
    } else {
      return 'hover:textGradient';
    }
  }

  // For removing last link right border
  navLinksList.lastElementChild.setAttribute('class', 'navLink border-r-0');

  // For index page
  if (`${path[3]}` === 'index.html') {
    navLinksList.firstElementChild.setAttribute(
      'class',
      'navLink textGradient'
    );
  }
}

export default navbarLinksFiller;
