// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { GET_WALLET_REQUEST, GET_WALLET_SUCCESS, requestWallet, GET_WALLET_FAILURE } from "../../src/store/wallet";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('requestWallet', () => {
//     it('dispatches GET_WALLET_REQUEST and GET_WALLET_SUCCESS on successful API response', async () => {
//         const responseData = { walletId: '12345', balance: 100 };
//         const requestMock = jest.fn().mockResolvedValue({ data: responseData });
//         jest.mock('axios', () => ({ request: { get: requestMock } }));
        
//         const expectedActions = [
//             { type: GET_WALLET_REQUEST },
//             { type: GET_WALLET_SUCCESS, payload: responseData },
//         ];
        
//         const store = mockStore({});
        
//         store.dispatch(requestWallet());
        
//         expect(store.getActions()).toEqual(expectedActions);
//         expect(requestMock).toHaveBeenCalled();
//     });
    
//     it('dispatches GET_WALLET_REQUEST and GET_WALLET_FAILURE on API error', async () => {
//         const requestMock = jest.fn().mockRejectedValue(new Error('API error'));
//         jest.mock('axios', () => ({ request: { get: requestMock } }));

//         const expectedActions = [
//             { type: GET_WALLET_REQUEST },
//             { type: GET_WALLET_FAILURE, error: '계정의 지갑 정보를 불러오는데 실패했습니다.' },
//         ];

//         const store = mockStore({});

//         await store.dispatch(requestWallet());
        
//         expect(store.getActions()).toEqual(expectedActions);
//         expect(requestMock).toHaveBeenCalled();
//     });
// });

// describe('wallet_reducer', () => {
//     describe('requestWallet', () => {
//         it('요청이 잘 실행되는가?', () => {

//         })

//         it('성공이 잘 실행되는가?', () => {

//         })

//         it('실패가 잘 실행되는가?', () => {

//         })
//     })
// })