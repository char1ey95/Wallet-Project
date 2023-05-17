import styled from "styled-components"
import { DarkInput } from "../../../common/input"
import { Step_ContentWrap, Step_ContentSubject, Step_Contents, StepFormFooter } from "./Step_content.styled"
import { EllipseBtn } from "../../../common/button"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const Step_4_Form = styled.form`
    width: 100%;
    height: 100%;
`

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: black;

    & > input {
        margin: 1.5rem 0;
    }
`

export const Step_4_Content = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword) alert('비밀번호가 일치하지 않습니다.')
        if(password === confirmPassword) navigate('/assets')
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <Step_4_Form onSubmit={handleSubmit}>
            <Step_ContentWrap>
                <Step_ContentSubject>비밀번호를 입력해주세요</Step_ContentSubject>
                <Step_Contents>
                    <InputWrap>
                        <DarkInput
                            name={'pw'}
                            type={'password'}
                            placeholder="🔒    비밀번호를 입력해주세요"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <DarkInput
                            name={'checkpw'}
                            type={'password'}
                            placeholder="🔒    비밀번호를 다시 입력해주세요"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </InputWrap>
                </Step_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn type="submit">Submit</EllipseBtn>
            </StepFormFooter>
        </Step_4_Form>
    );
};


// export const Step_4_Content = () => {

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault()
//         const input = e.target as HTMLElement
//     }

//     return(
//         <Step_4_Form onSubmit={handleSubmit}>
//             <Step_ContentWrap>
//                 <Step_ContentSubject>비밀번호를 입력해주세요</Step_ContentSubject>
//                 <Step_Contents>
//                     <InputWrap>
//                         <DarkInput name={'pw'} type={'password'}placeholder="🔒    비밀번호를 입력해주세요"/>
//                         <DarkInput name={'ckeckpw'} type={'password'}placeholder="🔒    비밀번호를 다시 입력해주세요"/>
//                     </InputWrap>
//                 </Step_Contents>
//             </Step_ContentWrap>
//             <StepFormFooter>
//                 <EllipseBtn>Submit</EllipseBtn>
//             </StepFormFooter>
//         </Step_4_Form>
//     )
// }