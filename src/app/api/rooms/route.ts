import { DB, readDB, writeDB } from "@lib/DB";
import { checkToken } from "@lib/checkToken";

import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  readDB();
  const room = DB.rooms
  return NextResponse.json({
    ok: true,
    rooms: room,
    totalRooms: room.length
  });
};

export const POST = async (request: NextRequest) => {
  const payload = checkToken();
  
  // const roomkey = (<Payload>payload).roomId
  // const roomname = (<Payload>payload).roomName
  
  // if(payload === null) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  // }


  readDB();
  // const rooms = DB.rooms
  // const findR = rooms.find((R:any)=> R.roomId === roomkey)
  // if( !findR){
    return NextResponse.json(
      {
        ok: false,
        message: `Room ${"roomkey"} already exists`,
      },
      { status: 400 }
    );
  // }



  const roomId = nanoid();

  //call writeDB after modifying Database
  // rooms.push({
  //   roomId: roomkey,
  //   roomName: roomname,
  // });
  writeDB();

   return NextResponse.json({
     ok: true,
  //   roomId: roomId,
  //   message: `Room ${roomname} has been created`,
   });
};
