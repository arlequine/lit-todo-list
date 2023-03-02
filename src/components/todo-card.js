import { LitElement, html, css } from 'lit';

export class TodoCard extends LitElement {
  static properties() {
    return {
      todo: { attribute: false }
    }
  }

  constructor() {
    super();
    this.todo = {
      name: 'Estudiar Lit-element',
      description: 'Desarrollar un to-do list',
      check: false
    }
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <div class="card">
        <h4>${this.todo.name}</h4>
      </div>
    `;
  }
}
customElements.define('todo-card', TodoCard);
