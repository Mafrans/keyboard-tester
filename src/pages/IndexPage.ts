// Components
import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/HelloWorld";
import "../styles/main.css";
import { TW } from "../util/TailwindMixin";

@customElement("x-index-page")
export class IndexPage extends TW(LitElement) {
  render(): TemplateResult {
    return html`
      <x-primary-layout>
        <x-hello-world></x-hello-world>
      </x-primary-layout>
    `;
  }
}
