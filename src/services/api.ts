import axios from 'interceptors/interceptor';

export default class Api {
  public static async getJackpot() {
    return axios({ method: 'GET', url: '/settings/v1' });
  }
}
