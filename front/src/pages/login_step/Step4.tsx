import { Step4_Form, StepContentWrap, StepContentSubject, StepContents, InputWrap, StepFormFooter } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EllipseBtn } from "../../common/button";
import { DarkInput } from "../../common/input";
import { RootState } from "../../store/rootState";
import { CREATE_WALLET_FAILURE, CREATE_WALLET_SUCCESS } from "../../store/wallet";
import request from "../../utils/request";
import { ACCOUNT_SUCCESS } from "../../store/account";

export const Step4 = () => {
    const { mnemonic } = useSelector((state: RootState) => state)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (password.length <= 8) alert("비밀번호는 8글자 이상으로 입력해주세요.")
            if (password !== confirmPassword) alert('비밀번호가 일치하지 않습니다.')

            const { data } = await request.post('/join', { masterKey: mnemonic.masterKey, password })
            if (data.failed) return alert("천문학적 확률로 해시값이 중복되었습니다.")
            dispatch({ type: CREATE_WALLET_SUCCESS, payload: data.account })
            dispatch({ type: ACCOUNT_SUCCESS, payload: data.account })
            navigate('/assets')
        } catch (e) {
            if(e instanceof Error)
            dispatch({type: CREATE_WALLET_FAILURE, payload: e.message})
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <Step4_Form onSubmit={handleSubmit}>
            <StepContentWrap>
                <StepContentSubject>비밀번호를 입력해주세요</StepContentSubject>
                <StepContents>
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
                </StepContents>
            </StepContentWrap>
            <StepFormFooter>
                <EllipseBtn type="submit">Submit</EllipseBtn>
            </StepFormFooter>
        </Step4_Form>
    );
};