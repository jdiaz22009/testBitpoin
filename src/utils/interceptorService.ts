class InterceptorService {
  interceptor: any;

  public setInterceptorListener(listener: any) {
    if (this.interceptor) {
      return;
    }
    this.interceptor = listener;
  }
}

export default new InterceptorService();
