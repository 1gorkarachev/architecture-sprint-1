declare class Api {
    _token: any;
    _groupId: any;
    _address: any;
    constructor({ address, token, groupId }: any);
    getCardList(): Promise<any>;
    removeCard(cardID: any): Promise<any>;
    setUserInfo({ name, about }: any): Promise<any>;
    changeLikeCardStatus(cardID: any, like: any): Promise<any>;
}
declare const api: Api;
export default api;
