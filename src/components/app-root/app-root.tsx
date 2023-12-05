import { Component, Host, Event, EventEmitter, h } from '@stencil/core';

export type A = { };

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  @Event() readonly e!: EventEmitter<{ a: A; }>;
  render() {
    return <Host></Host>
  }
}
