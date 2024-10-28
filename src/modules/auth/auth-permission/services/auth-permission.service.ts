import { Injectable } from '@nestjs/common';

import { DbSinglePermissionService } from '@/shared/MongoDB/services/single-permission/db-single-permission.service';
import {
  CreatePermissionGroupDto,
  CreateSinglePermissionDto,
  QueryPermissionGroupItemByIdDto,
  QueryPermissionGroupListDto,
  QuerySinglePermissionItemByIdDto,
  QuerySinglePermissionListDto,
  UpdatePermissionGroupDto,
  UpdateSinglePermissionDto,
} from '@/modules/auth/auth-permission/controllers/auth-permission.controller.dto';
import { DbPermissionGroupService } from '@/shared/MongoDB/services/permission-group/db-single-permission.service';

@Injectable()
export class AuthPermissionService {
  constructor(
    private readonly singlePermissionModelService: DbSinglePermissionService,
    private readonly permissionGroupModelService: DbPermissionGroupService,
  ) {}

  async querySinglePermissionList(queryParams: QuerySinglePermissionListDto) {
    return this.singlePermissionModelService.queryList({
      queryParams: queryParams,
    });
  }

  async querySinglePermissionDetailById(
    queryParams: QuerySinglePermissionItemByIdDto,
  ) {
    return this.singlePermissionModelService.queryById(queryParams.id);
  }

  async createSinglePermission(bodyParams: CreateSinglePermissionDto) {
    return this.singlePermissionModelService.create(bodyParams);
  }

  async updateSinglePermissionById(
    id: string,
    bodyParams: UpdateSinglePermissionDto,
  ) {
    return this.singlePermissionModelService.updateById(id, bodyParams);
  }

  async removeSinglePermissionById(id: string) {
    return this.singlePermissionModelService.removeById(id);
  }

  async queryPermissionGroupList(queryParams: QueryPermissionGroupListDto) {
    return this.permissionGroupModelService.queryList({
      queryParams: queryParams,
    });
  }

  async queryPermissionGroupDetailById(
    queryParams: QueryPermissionGroupItemByIdDto,
  ) {
    return this.permissionGroupModelService.queryById(queryParams.id);
  }

  async createPermissionGroup(bodyParams: CreatePermissionGroupDto) {
    return this.permissionGroupModelService.create(bodyParams);
  }

  async updatePermissionGroupById(
    id: string,
    bodyParams: UpdatePermissionGroupDto,
  ) {
    return this.permissionGroupModelService.updateById(id, bodyParams);
  }

  async removePermissionGroupById(id: string) {
    return this.permissionGroupModelService.removeById(id);
  }
}
