// Components
import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/FocusArea";
import "../components/HelloWorld";
import "../components/layouts/PrimaryLayout";
import "../styles/main.css";
import { TW } from "../util/TailwindMixin";

@customElement("x-index-page")
export class IndexPage extends TW(LitElement) {
  render = (): TemplateResult => html`
    <x-primary-layout>
      <x-focus-area>
        <x-hello-world></x-hello-world>
      </x-focus-area>
    </x-primary-layout>
  `;
}
