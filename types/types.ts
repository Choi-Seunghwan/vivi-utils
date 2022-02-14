export interface Room {
  roomId: number;
  title: string;
  roomKey: string;
  connectionType: connectionType;
  roomHost: RoomHost;
  members: Member[];
}

export interface RoomInfo {
  roomId: number;
  title: string;
  roomKey: string;
  connectionType: connectionType;
  roomHost: RoomHost;
}

export type connectionType = 'P2P' | 'SFU';

export interface RoomHost extends Member {}

export interface Member {
  accountId: number;
  socketId: string;
  nickname: string;
}

export interface ConnectionInfo {
  socket: any;
  socketId: string;
}

export interface SocketReplyMessage {
  method: string;
  result: any;
  statusCode: string;
  resultCode: string;
  description?: string;
}

export interface ChatMessage {
  senderInfo: any;
  content: string;
  dateTime: number;
}
