import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Only add social icons if on the About Us page
  const isAboutUs = window.location.pathname.includes('/about-us');

  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';

        if (isAboutUs) {
          document.body.classList.add('about-us-page');
          div.classList.add('center-align');
          div.classList.add('no-border');
          const socialContainer = document.createElement('div');
          socialContainer.className = 'cards-card-social';

          const socials = [
            {
              name: 'facebook',
              url: 'https://facebook.com',
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.596 1.325-1.324V1.325C24 .596 23.404 0 22.675 0z"/>
                    </svg>`,
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1DA1F2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.92 4.92 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.15a4.917 4.917 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.209c9.058 0 14.01-7.513 14.01-14.011 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.59z"/>
                    </svg>`,
            },
            {
              name: 'instagram',
              url: 'https://instagram.com',
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E4405F" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-4.25 1.75a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                    </svg>`,
            },
          ];

          socials.forEach(({ name, url, svg }) => {
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = `social-icon social-icon-${name}`;
            a.title = name.charAt(0).toUpperCase() + name.slice(1);
            a.innerHTML = svg;
            socialContainer.appendChild(a);
          });

          div.appendChild(socialContainer);
        }
      }
    });

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });

  block.textContent = '';
  block.append(ul);
}
