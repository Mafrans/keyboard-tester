import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TW } from "../util/TailwindMixin";

@customElement("x-focus-area")
export class FocusArea extends TW(LitElement) {
  @property({ type: Boolean })
  focused = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("click", this.onClickInside.bind(this));
    window.addEventListener("click", this.onClickOutside.bind(this));
    window.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onClickInside(event: MouseEvent): void {
    this.focused = true;
    event.stopPropagation();
  }

  onClickOutside(): void {
    this.focused = false;
  }

  onKeyDown(event: KeyboardEvent): void {
    const isEscape = event.code === "Escape";
    const isControlQ = event.code === "KeyQ" && event.ctrlKey;
    if (isEscape || isControlQ) {
      this.focused = false;
    }

    if (this.focused) {
      event.preventDefault();
    }
  }

  render = (): TemplateResult => html`
    <div>
      <slot></slot>
      <p class="flex items-center">
        <x-icon icon="info"></x-icon>
        <span>
          Capturing input, click anywhere outside of this area or press
          <kbd>Ctrl+C</kbd> to stop.
        </span>
      </p>
    </div>
  `;
}
