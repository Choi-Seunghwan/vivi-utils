import type { PeerConnection } from '@/modules/PeerConnection';

export interface Room {
  roomId: number;
  title: string;
  roomKey: string;
  connectionType: connectionType;
  roomHost: RoomHost;
  members: Member[];
}

export type connectionType = 'P2P' | 'SFU';

export interface RoomHost extends Member {}
export interface Member {
  accountId: number;
  socketId: string;
  nickname: string;
  peerConnection: PeerConnection;
}

export interface ChatMessage {
  member: Member;
  message: string;
}

/**
 * socket 응답 메세지 양식
 */
export interface SocketReplyMessage {
  method: string;
  result: any;
  statusCode: string;
  resultCode: string;
  description?: string;
}
