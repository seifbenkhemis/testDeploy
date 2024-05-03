import { RoomI } from "./room.interface";
import { UserI } from "./user.interface";

export interface MessageI {
    id?: string;
    text: string;
    user: UserI;
    room: RoomI;
    created_at: Date;
    updated_at: Date;
  }