export interface Room {
  roomId: string;
  memberCount: number;
  title: string;
  channelName: string;
  roomCreatorInfo: RoomCreatorInfo;
}

export interface RoomCreatorInfo {
  accountId: string;
  desc: string;
  socketId: string;
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
