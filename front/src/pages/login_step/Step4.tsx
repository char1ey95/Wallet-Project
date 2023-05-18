import { Step_4_Form, Step_ContentWrap, Step_ContentSubject, Step_Contents, InputWrap, StepFormFooter } from "./styled";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { EllipseBtn } from "../../common/button";
import { DarkInput } from "../../common/input";

export const Step4 = () => {
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