import type { TemplateResult } from "lit";
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
  icon: GgIcon = "shape-circle";

  connectedCallback(): void {
    super.connectedCallback();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://css.gg/${this.icon}.css`;
    this.shadowRoot.append(link);
  }

  render = (): TemplateResult =>
    html` <i class="gg-${this.icon} inline-block"></i> `;
}
