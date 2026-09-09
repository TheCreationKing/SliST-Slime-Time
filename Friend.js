class FriendSlime extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
          <style>
                              .Friend {
                              transform-origin: 50% 90%;
                  transition: transform 0.2s ease, filter 0.2s ease;
                  cursor: grab;
                }
                        .Friend:hover {
                    transform: scale(1.02);
                    transition: transform 0.2s ease;
                }
                        .Friend:active {
                    transform: scale(1.1, 0.8);
                    transition: transform 0.2s ease;
                    cursor: grabbing;
                }
          </style>
            <svg id="Friend" viewBox="0 0 250 240" class="Friend" style="position:absolute; z-index: 2; height:80; width:80;">
            <defs/>
            <path id="shape0" transform="matrix(1.31321419048092 0 0 1.31321419048092 7.41695530354433 54.1166745761049)" fill= var(--slime-body) stroke=var(--slime-body) stroke-width="9.6" d="M175.947 71.658C176.57 31.5112 137.749 -0.873343 87.9736 0.0179674C38.1986 0.909277 0.96 27.6583 0 71.658C0 125.738 50.5993 118.338 87.9736 118.098C125.348 117.858 175.947 125.738 175.947 71.658Z"/>
            <path id="shape01" transform="matrix(1.31321414420711 0 0 1.31321414420711 1.01877268307119 148.849281923108)" fill=var(--slime-shadow) stroke=var(--slime-shadow) d="M185.276 0C175.66 26.728 153.724 35.8226 92.8454 37.32C36.4444 38.7073 8.69169 25.279 0 0.48004C0.619024 20.8482 8.41648 35.2538 23.3924 43.6969C28.7954 45.7445 39.0869 50.0213 53.97 51.1288C78.0049 51.2321 115.68 49.9177 138.993 50.2803C170.727 46.4496 185.027 29.5242 185.276 0Z"/>
            <path id="shape02" transform="matrix(1.31321420815116 0 0 1.31321420815116 87.103728205985 72.5466998393282)" fill=var(--slime-highlight) d="M24.9612 0.00252821C5.09419 0.154632 -4.82475 17.3982 2.3067 24.6398C5.97497 28.3647 15.8859 27.327 27.1071 27.001C37.701 26.6933 49.5033 27.2882 56.9855 24.3012C69.0983 19.4655 58.7952 -0.256508 24.9612 0.00252821Z"/>
            <path id="shape1" transform="matrix(1.30416347912603 0.153912885113491 -0.153912885113491 1.30416347912603 192.262126159482 101.214200323725)" fill=var(--slime-highlight) d="M14.6372 4.40357C13.7455 2.71878 6.03363 -2.30632 1.66904 1.23697C-3.91307 5.76868 6.1696 8.86183 7.68665 9.36115C14.4478 11.5865 16.5898 8.09297 14.6372 4.40357Z"/>
            Sorry, your browser doesn't display friend...
            </svg> 
    `;
  }
}

customElements.define('friend-slime', FriendSlime);
