import { EnvironmentInstanceDTO } from "../models";
import { TableApiBase } from "../tableApiBase";

export const TABLENAME = "x_g_dis_atat_environment_instance";

export class EnvironmentInstanceAPi extends TableApiBase<EnvironmentInstanceDTO> {
  constructor() {
    super(TABLENAME);
  }

}
