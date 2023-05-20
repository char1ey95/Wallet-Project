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

## 2. 니모닉 활용 로직 구상
- step2에서 니모닉 요청 후 렌더
- 니모닉을 시드로 이용, 마스터 키 생성
- step4 가입시 마스터 키와 인덱스를 이용해서 최초의 계정 생성
- 이후 계정 생성시 인덱스 규칙을 지정한 후 마스터키로 계정 생성

## 3. 계정 생성시 첫번째 account 생성 및 account로 dispatch 하기
- 기능 구현 완료

## 4. wallet의 모든 계정정보 balance값 요청하기

- 모든 계정의 balance를 불러오는 것은 비효율적
- 계정 선택시 해당 계정의 balance를 가져와 업데이트

**계정 Amount 불러오기**

    1. 계정 클릭
    2. 클릭된 계정의 account를 가지고 balance 정보를 업데이트
    3. 화면에 렌더

## 5. 