import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketGuard } from '../../guards/socket.guard';
import { QueryDto } from './dto';
import { UploadService } from './upload.service';

@UseGuards(SocketGuard)
@UsePipes(new ValidationPipe({ transform: true }))
@WebSocketGateway()
export class UploadGateway {
  private query: QueryDto = {
    page: 1,
    size: 10,
    sortBy: 'updatedAt',
    sortOrder: 'DESC',
  };
  constructor(private readonly uploadService: UploadService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('upload/list')
  async list(@MessageBody() query: QueryDto): Promise<WsResponse<unknown>> {
    const event = 'list';
    this.query = query;
    const data = await this.uploadService.list(query);
    return { event, data };
  }

  async inList() {
    const data = await this.uploadService.list(this.query);
    this.server.emit('list', data);
  }

  @SubscribeMessage('upload/delete')
  async remove(@MessageBody() ids: string[]) {
    await this.uploadService.remove(ids);
    await this.inList();
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
