import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface HttpRequestConfig extends AxiosRequestConfig {
    signal?: AbortSignal;
    body?: any
}
  
interface httpType {
    requestConfig: HttpRequestConfig;
    callback: (data: any) => void;
}


class BaseApi {
    //class and sub class
    protected devDomain: string;
    protected prodDomain: string | undefined;
    protected resource: string;
    //class instance only
    private isLoading: boolean;
    private error: string;
    private abortController: AbortController;
    private httpClient: AxiosInstance;

    constructor(resource: string, httpClient: AxiosInstance){

        this.devDomain = 'localhost:3000';
        this.prodDomain = process.env.NEXT_PUBLIC_URL_DOMAIN;
        this.resource = resource;

        this.isLoading = false;
        this.error = '';
        this.abortController = new AbortController();
        this.httpClient = httpClient;
    }

    protected findHostName(): string {
        if (window.location.host === this.devDomain) {
            return `http://localhost:8000/api/${this.resource}`;
        }
        return `${this.prodDomain}api/${this.resource}`;
    }

    public async httpRequest({ requestConfig, callback }: httpType){

        try {

            this.isLoading = true;

            this.error = '';

            const response = await this.httpClient({
                ...requestConfig,
                signal: this.abortController.signal,
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if(response.status !== 200) throw new Error('Request failed');

            if(callback !== null) callback(response.data);
    
        }
        catch( err: any){

            const error = err?.response?.data.error || undefined;

            if(axios.isCancel(err)) return;

            if(err instanceof Error) this.error = error || err.message;
           
        }
        finally{

            this.isLoading = false;
            this.abortController = new AbortController();
        }
    }

    public async formHttpRequest(){

        try{

        }
        catch(err){

        }
        finally {
            this.isLoading = false;
            this.abortController = new AbortController();
        }
    }

    public abort(){
        this.abortController.abort();
        this.abortController = new AbortController();
    }

    public getLoadingStatus(): boolean {

        return this.isLoading;
    }

    public getErrorStatus(): string {

        return this.error;
    }
}

export default BaseApi;