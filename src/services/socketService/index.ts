import * as socketIo from 'socket.io-client'
import SOCKET_EVENTS from './socketEvents'
import {Action, TeamId} from 'src/components/Gamepad/interfaces';
// const SERVER_URL = 'http://192.168.1.105:8080/'
const SERVER_URL = 'http://192.168.0.174:8080/'

export class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = socketIo(SERVER_URL);
  }
  /**
   * @param  {string} name // this name will be shown near your tank unit
   * @param  {TeamId} teamId // team id you want join ('YELLOW' of 'GREEN')
   * @param  {(id:string)=>void} callback // use this callback to achive your tankId then use it to control your tank
   */
  public registerUser(name: string, teamId: TeamId, callback: (id: string) => void) {
    this.socket.emit(SOCKET_EVENTS.REGISTER_USER, name, teamId, callback);
  }
  /**
   * @param  {string} id // tank id 
   * @param  {Action} direction // direction to move (f.e. 'LEFT')
   */
  public move(id: string, direction: Action) {
    this.socket.emit(SOCKET_EVENTS.MOVE, {id, direction});
  }
  /**
   * @param  {string} id // tank id 
   */
  public fire(id: string) {
    this.socket.emit(SOCKET_EVENTS.FIRE, {id});
  }
}

const socketService = new SocketService()
export default socketService