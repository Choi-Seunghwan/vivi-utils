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
  errorCode: string;
  result: any;
}

export interface ChatMessage {
  senderInfo: any;
  content: string;
  dateTime: number;
}
