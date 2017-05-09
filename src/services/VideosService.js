import axios from 'axios';
import qs from 'qs';
import TokenStore from './../store/TokenStore';

export default class VideoService {
  static videos(args){
    return axios.get('/videos',{
      params:{...args,sessionId:TokenStore.sessionId }
    })
  }

}
