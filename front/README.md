# 이슈사항

## 0. Loadding 추후에 추가하기

```tsx
const [state, setState] = useState({ isLoading: true, error: null, data: {} })

setState(state => ({...state, isLoading: false, error: null, data: [...state.data, newState]}))

const request = async () => {
    try {
        const response = await axios.get('/')
        const newState = reponse.data
        setState(state => ({...state, isLoading: false, error: null, data: [...state.data, newState]}))
    } catch (e) {
        setState(state => ({...state, isLoading: false, error: e.message, data: null}))
    }
}

const request = async () => {
    try {
        const response = await axios.get('/')
        const newState = reponse.data
        dispatch(setState({ type: SUCCESS, payload: newState }))
    } catch (error) {
        dispatch(setState({ type: FAILURE, payload: error }))
    }
}
```

## 1. Copy 버튼
- 이전 주소값이 들어감
- useState 문제

## 2. 니모닉 활용 로직 구상 필요

## 3. 계정 생성시 첫번째 account 생성 및 account로 dispatch 하기

## 4. wallet의 모든 계정정보 balance값 요청하기