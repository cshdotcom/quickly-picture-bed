import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { RoleGuard } from 'src/common/role.guard';
import { User } from 'src/common/user.decorator';
import { User as UserType } from 'src/user/entities/user.entity'

@Controller({ path: 'author', version: '1' })
@ApiTags('知乎作者管理')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RoleGuard)
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  
  @Post('create')
  @HttpCode(200)
  @ApiOperation({ summary: '新增作者', description: '新增作者' })
  @ApiResponse({ status: 200, description: '创建成功' })
  create(@Body() createAuthorDto: CreateAuthorDto, @User() user: UserType) {
    return this.authorService.create(createAuthorDto, user.id);
  }

  @Post('list')
  @HttpCode(200)
  @ApiOperation({ summary: '作者列表', description: '查询作者列表' })
  @ApiResponse({ status: 200, description: '查询成功' })
  findAll(@Body() param: any, @User() user: UserType) {
    return this.authorService.findAll(param, user.id);
  }

  @Post('detail')
  @HttpCode(200)
  @ApiOperation({ summary: '作者详情', description: '查询作者详情' })
  @ApiResponse({ status: 200, description: '查询成功' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          default: 1,
          description: '作者id'
        }
      }
    }
  })
  findOne(@Body('id') id: number, @User() user: UserType) {
    return this.authorService.findOne(id, user.id);
  }

  @Post('update')
  @HttpCode(200)
  @ApiOperation({ summary: '更新作者', description: '更新作者' })
  @ApiResponse({ status: 200, description: '更新成功' })
  update(@Body() param: CreateAuthorDto, @User() user: UserType) {
    return this.authorService.update(param, user.id);
  }

  @Post('delete')
  @HttpCode(200)
  @ApiOperation({ summary: '删除作者', description: '删除作者' })
  @ApiResponse({ status: 200, description: '删除成功' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          default: 1,
          description: '作者id'
        }
      }
    }
  })
  remove(@Body('id') id: number, @User() user: UserType) {
    return this.authorService.remove(id, user.id);
  }

  @Post('toggleSchedule')
  @HttpCode(200)
  @ApiOperation({ summary: '切换定时任务', description: '切换定时任务' })
  @ApiResponse({ status: 200, description: '切换成功' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          default: 1,
          description: '作者id'
        }
      }
    }
  })
  toggleSchedule(@Body('id') id: number, @User() user: UserType) {
    return this.authorService.toggleSchedule(id, user.id)
  }

  @Post('stats')
  @HttpCode(200)
  @ApiOperation({ summary: '统计数据', description: '统计数据' })
  @ApiResponse({ status: 200, description: '查询成功' })
  stats(@User() user: UserType) {
    return this.authorService.getStats(user.id);
  }
}