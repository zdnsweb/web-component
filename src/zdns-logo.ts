import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('zdns-logo')
export class ZDNSLogo extends LitElement {

  static override styles = css`
    :host {
      display: flex;
      width: inherit;
      height: inherit;
    }
  `;

  @property({ type: String, attribute: 'primary-color', reflect: true })
  primaryColor: string = '#39a0f4';

  @property({ type: String, attribute: 'secondary-color', reflect: true })
  secondaryColor: string = '#abf84c';

  override render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.21 36.89">
        ${this.svg()}
      </svg>
    `;
  }

  private svg() {
    return svg`
      <defs>
          <style>
            .cls-1,.cls-2{isolation:isolate}
          </style>
        </defs>
        <path fill="${this.primaryColor}" d="M67.5 20.67a14.83 14.83 0 0 1-6.17 7.39 17.84 17.84 0 0 1-9.85 3H37.87l4.62-12.68h6.31l-2.71 7.44h7.3a9 9 0 0 0 4.8-1.35 6.82 6.82 0 0 0 3-3.51 3.4 3.4 0 0 0-.41-3.58A4.71 4.71 0 0 0 57 15.93H43.36l1.83-5.23h13.68c3.59 0 6.19.92 7.82 2.76s1.89 4.24.81 7.21" class="cls-1" transform="translate(-0.79 -0.71)"/>
        <path fill="${this.primaryColor}" d="M94.22 28.38q-1 2.78-3.51 2.77a3.68 3.68 0 0 1-2.95-1.36l-8.26-9.94L75.44 31h-6.31l6.44-17.72A4 4 0 0 1 77 11.43a3.77 3.77 0 0 1 2.31-.73A3.39 3.39 0 0 1 82 11.91l8.26 10 4.09-11.21h6.31Z" class="cls-1" transform="translate(-0.79 -0.71)"/>
        <path fill="${this.primaryColor}" d="m131 10.7-1.88 5.23h-17.28a1.36 1.36 0 0 0-1.46.84c-.2.55.08.83.85.83h10.34q3.69 0 5.51 1.8t.76 5a9.26 9.26 0 0 1-4.36 4.87A13.36 13.36 0 0 1 116.7 31H98.13l1.87-5.23h18.6a5.55 5.55 0 0 0 1.9-.34 2.18 2.18 0 0 0 1.43-1.16c.18-.5 0-.89-.6-1.15a4.18 4.18 0 0 0-1.67-.28h-10.34a7.47 7.47 0 0 1-5.17-1.58 3.81 3.81 0 0 1-.85-4.48 8.47 8.47 0 0 1 4.12-4.51 13 13 0 0 1 6.32-1.57Z" class="cls-1" transform="translate(-0.79 -0.71)"/>
        <path fill="${this.primaryColor}" d="M4.48 14.5a24.94 24.94 0 0 0-2.37 4.66c-3.89 10.19 1.14 18.45 11.24 18.45 5.58 0 11.53-2.53 16.4-6.5H9.33v-4L23.72 14.5Z" class="cls-2" transform="translate(-0.79 -0.71)"/>
        <path fill="${this.secondaryColor}" d="M8 10h25.94v4L19.55 26.64h14.7a27 27 0 0 0 4.42-7.48C42.56 9 37.53.71 27.43.71 20.63.71 13.26 4.46 8 10" class="cls-2" transform="translate(-0.79 -0.71)"/>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zdns-logo': ZDNSLogo;
  }
}
