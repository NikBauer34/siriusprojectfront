import {makeAutoObservable} from 'mobx'
import { IUser } from '../../api/IUser';
import AuthService from '../../api/services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../../api/AuthResponse';
import { API_URL } from '../../constants/constants';
import { AxiosResponse } from 'axios';
export default class UserStore {
  user = {} as IUser;
  isAuth = true;
  isLoading = false;
  constructor(){
    makeAutoObservable(this)
  }
  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }
  setUser(user: IUser): void {
    this.user = user;
  }
  setLoading(bool: boolean): void {
    this.isLoading = bool;
  }

  async login(email: string, password: string): Promise<string | AxiosResponse<AuthResponse, any>> {
    try {
      const response = await AuthService.login(email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return response
    } catch (e: any) {
      return e.response?.data?.message
    }
  }
  async registration(email: string, password: string): Promise<string | AxiosResponse<AuthResponse, any>> {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response)
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      return response
    } catch (e: any) {
      return e.response?.data?.message
    }
  }
  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false)
      this.setUser({} as IUser)

    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true);
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }
}