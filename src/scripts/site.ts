// Only the USWDS behaviors this site uses: accordion, header navigation, in-page navigation.
import accordion from '@uswds/uswds/js/usa-accordion';
import navigation from '@uswds/uswds/js/usa-header';
import inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';

(window as any).uswdsPresent = true;
document.documentElement.classList.add('js');
for (const behavior of [accordion, navigation, inPageNavigation]) behavior.on(document.body);

document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));

// USWDS toggles the mobile menu with a class only. Mirror that state onto the Menu button for screen readers.
const menuNav = document.getElementById('primary-nav');
const menuButton = document.querySelector('.usa-menu-btn');
if (menuNav && menuButton) new MutationObserver(() => menuButton.setAttribute('aria-expanded', String(menuNav.classList.contains('is-visible')))).observe(menuNav, { attributes: true, attributeFilter: ['class'] });

// Videos show a local thumbnail and load the YouTube player only when clicked. Without JavaScript the link opens YouTube.
document.querySelectorAll<HTMLAnchorElement>('a[data-youtube]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.youtube}?autoplay=1&rel=0`;
  frame.title = (link.querySelector('.video__play')?.textContent ?? 'Video').replace(/^Play video: /, '');
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  link.replaceWith(frame);
  frame.focus();
}));
