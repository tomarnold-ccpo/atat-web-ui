import { UsersApi } from "./users";
import { AcquisitionPackagesApi } from "./acquisitionPackages";
import { ProjectOverviewApi } from "./projectOverview";
import { OrganizationApi } from "./organization";
import { ContactsApi } from "./contacts";

export default {
   users: new UsersApi(),
   acquisitionPackageTable: new AcquisitionPackagesApi(),
   projectOverviewTable: new ProjectOverviewApi(),
   organizationTable: new OrganizationApi(),
   contactsTable: new ContactsApi()
}