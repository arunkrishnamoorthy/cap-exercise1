using { com.exercise as db } from '../db/schema';

service Projects {
    entity Projects as projection on db.Projects;
    entity Customer as projection on db.Customer;
}