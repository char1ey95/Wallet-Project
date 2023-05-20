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

## 5. 채굴버튼

- Mine 버튼 클릭
- 계정 정보를 넘겨 채굴
- 채굴시 balance 정보 업데이트
- 채굴 블록 내용 화면에 Popup 띄우기?

## 6. 트랜잭션 발동 후 송금할 계좌 input박스 비우기

## 7. 로그인 구현하기
- 니모닉을 입력받는다.
    - 입력받은 니모닉은 mnemonic에 넣는다.
    - masterKey를 만든다.
- 비밀번호를 입력받는다.
- 둘다 입력받아 해쉬화하여 데이터베이와 비교한다
- 일치하는 accountsNumber를 가져온다.
- accountsNumber 만큼 반복문을 돌려 wallet: [{}, {}, {}, ...]을 채워보낸다.
- dispatch를 wallet에 하고, dispatch를 account에는 wallet의 첫번째 인덱스의 계정을 넣어준다.