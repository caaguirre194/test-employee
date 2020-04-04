import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, FormsModule],
  exports: [ReportComponent],
})
export class ComponentsModule {}
