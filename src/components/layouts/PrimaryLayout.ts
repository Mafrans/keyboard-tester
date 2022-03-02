import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { TW } from "../../util/TailwindMixin";

@customElement("x-primary-layout")
export class PrimaryLayout extends TW(LitElement) {
  render = () => html` <div class="container"><slot></slot></div> `;
}
