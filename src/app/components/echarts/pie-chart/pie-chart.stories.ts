import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { NgxEchartsModule } from 'ngx-echarts';
// import { TaskComponent } from './task.component';
import { PieChartComponent } from './pie-chart.component';

export default {
  component: PieChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [PieChartComponent],
      imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
      ],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Pie Chart',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<PieChartComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
