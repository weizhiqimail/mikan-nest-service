import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
import { AuthPermissionService } from '@/modules/auth/auth-permission/services/auth-permission.service';

@ApiTags('权限和权限组')
@Controller('auth/permission')
export class AuthPermissionController {
  constructor(private readonly authPermissionService: AuthPermissionService) {}

  @ApiOperation({ summary: '查询单个权限列表' })
  @Get('/single/list')
  async querySinglePermissionList(
    @Query() queryDto: QuerySinglePermissionListDto,
  ) {
    return this.authPermissionService.querySinglePermissionList(queryDto);
  }

  @ApiOperation({ summary: '通过 id 查询单个权限详情' })
  @Get('/single/itemById')
  async querySinglePermissionItem(
    @Query() query: QuerySinglePermissionItemByIdDto,
  ) {
    return this.authPermissionService.querySinglePermissionDetailById(query);
  }

  @ApiOperation({ summary: '创建单个权限' })
  @Post('/single/create')
  async createSinglePermission(@Body() bodyDto: CreateSinglePermissionDto) {
    return this.authPermissionService.createSinglePermission(bodyDto);
  }

  @ApiOperation({ summary: '更新单个权限信息' })
  @Post('/single/updateById')
  async updateSinglePermission(@Body() bodyDto: UpdateSinglePermissionDto) {
    return this.authPermissionService.updateSinglePermissionById(
      bodyDto.id,
      bodyDto,
    );
  }

  @ApiOperation({ summary: '删除单个权限' })
  @Post('/single/removeById')
  async removeSinglePermission(
    @Body() queryDto: QuerySinglePermissionItemByIdDto,
  ) {
    return this.authPermissionService.removeSinglePermissionById(queryDto.id);
  }

  @ApiOperation({ summary: '查询权限组列表' })
  @Get('/group/list')
  async queryPermissionGroupList(
    @Query() queryDto: QueryPermissionGroupListDto,
  ) {
    return this.authPermissionService.queryPermissionGroupList(queryDto);
  }

  @ApiOperation({ summary: '通过 id 查询权限组详情' })
  @Get('/group/itemById')
  async queryPermissionGroupItem(
    @Query() queryDto: QueryPermissionGroupItemByIdDto,
  ) {
    return this.authPermissionService.queryPermissionGroupDetailById(queryDto);
  }

  @ApiOperation({ summary: '创建权限组' })
  @Post('/group/create')
  async createPermissionGroup(@Body() bodyDto: CreatePermissionGroupDto) {
    return this.authPermissionService.createPermissionGroup(bodyDto);
  }

  @ApiOperation({ summary: '更新权限组信息' })
  @Post('/group/updateById')
  async updatePermissionGroup(@Body() bodyDto: UpdatePermissionGroupDto) {
    return this.authPermissionService.updatePermissionGroupById(
      bodyDto.id,
      bodyDto,
    );
  }

  @ApiOperation({ summary: '删除权限组' })
  @Post('/group/removeById')
  async removePermissionGroup(
    @Body() queryDto: QueryPermissionGroupItemByIdDto,
  ) {
    return this.authPermissionService.removePermissionGroupById(queryDto.id);
  }
}
