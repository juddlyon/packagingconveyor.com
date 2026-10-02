// Only the USWDS behaviors this site uses: accordion, header navigation, in-page navigation.
import accordion from '@uswds/uswds/js/usa-accordion';
import navigation from '@uswds/uswds/js/usa-header';
import inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';

(window as any).uswdsPresent = true;
document.documentElement.classList.add('js');
for (const behavior of [accordion, navigation, inPageNavigation]) behavior.on(document.body);

document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
