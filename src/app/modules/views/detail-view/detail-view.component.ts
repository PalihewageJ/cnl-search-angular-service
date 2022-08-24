import { Component, ViewChild, TemplateRef } from "@angular/core";
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'cosap-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @ViewChild("template", { read: TemplateRef })
  public notificationTemplate!: TemplateRef<any>;

  public type: any;

  constructor(private notificationService: NotificationService) {}

  public showDefault(): void {
    this.type = "default";

    this.notificationService.show({
      content: this.notificationTemplate,
      hideAfter: 600,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "none", icon: false },
    });
  }
  public showSuccess(): void {
    this.notificationService.show({
      content: "Success Notification",
      hideAfter: 1000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "success", icon: true },
    });
  }
  public showWarning(): void {
    this.notificationService.show({
      content: "Warning Notification",
      hideAfter: 1000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "warning", icon: true },
    });
  }
  public showInfo(): void {
    this.notificationService.show({
      content: "Info Notification",
      hideAfter: 1000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "info", icon: true },
    });
  }
  public showError(): void {
    this.notificationService.show({
      content: "Error Notification",
      hideAfter: 1000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "error", icon: true },
    });
  }
}
