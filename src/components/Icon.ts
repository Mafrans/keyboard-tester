import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TW } from "../util/TailwindMixin";

/**
 * Todo: research if this is an efficient way of importing icons
 * it's possible that the large number of web requests caused by this
 * will cause performance issues even though they're only about 500 bytes.
 */

@customElement("x-icon")
export class Icon extends TW(LitElement) {
  @property({ type: String })
  icon = "shape-circle";

  connectedCallback() {
    super.connectedCallback();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://css.gg/${this.icon}.css`;
    this.shadowRoot.appendChild(link);
  }

  render = () => html` <i class="gg-${this.icon} inline-block"></i> `;
}
