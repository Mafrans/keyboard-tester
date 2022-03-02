import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { TW } from "../util/TailwindMixin";

@customElement("x-keyboard-element")
export class Keyboard extends TW(LitElement) {
  render = (): TemplateResult => html` <div></div> `;
}
