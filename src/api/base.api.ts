class BaseApi {

    protected devDomain: string;
    protected prodDomain: string | undefined;
    protected resource: string;

    constructor(resource: string){
        this.devDomain = 'localhost:3000';
        this.prodDomain = process.env.NEXT_PUBLIC_URL_DOMAIN;
        this.resource = resource;

    }

    protected findHostName(): string {
        if (window.location.host === this.devDomain) {
            return `http://localhost:8000/api/${this.resource}`;
        }
        return `${this.prodDomain}api/${this.resource}`;
    }
}