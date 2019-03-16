import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellComponent } from './shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagePeekComponent } from './sidebar/message-peek/message-peek.component';
import { NotificationPeekComponent } from './sidebar/notification-peek/notification-peek.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './sidebar/sidebar-header/sidebar-header.component';
import { SidebarNavComponent } from './sidebar/sidebar-nav/sidebar-nav.component';
import { ApplicationHostComponent } from './application-host/application-host.component';
import { SafeUrlPipe } from './core/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    ShellComponent,
    SidebarComponent,
    MessagePeekComponent,
    NotificationPeekComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    ApplicationHostComponent,
    SafeUrlPipe],
  exports: [ShellComponent]
})
export class ShellModule { }
