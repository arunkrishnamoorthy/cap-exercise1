namespace com.exercise;
using { cuid,managed,sap.common.CodeList } from '@sap/cds/common';

entity Projects: cuid, managed {
    name: String not null @title: 'Project Name';
    description: String @title: 'Project Description';
    startDate: Date @title: 'Start Date';
    endDate: Date @title: 'End Date';
    customer: Association to Customer;
}

entity Customer: cuid, managed {
    name: String @title: 'Customer Name';
    projects: Association to many Projects on projects.customer = $self;
}
